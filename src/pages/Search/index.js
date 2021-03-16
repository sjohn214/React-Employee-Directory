import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";

class Search extends Component {
    state = {
        search: "",
        employees: [],
        filtered: [],
        results: [],
        error: ""

    };


    componentDidMount() {
        API.getRandomUsers()
        .then(res => this.setState({ employees: res.data }))
        .catch(err => console.log(err));
        console.log(this.state.employees);
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getRandomUsers(this.state.search)
        .then(res => {
            if (res.data.status === "error") {
                throw new Error(res.data);
            }
            this.setState({ results: res.data, error: "Search Empolyee Name"});
        }).catch(err => this.setState({ error: err}));
    };

    render() {
        return (
            <div>
                <Container style={{ minHeight: "75% "}}/>
                <br />
                <Card/>
                <br />
                <h3 className="text">Employee Directory Search</h3>
                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    employees={this.state.employees}/>
                <SearchResults results={this.state.employees}/>
                <Container/>
            </div>
        )
    }
}

export default Search;

