import React, { Component } from "react";
import API from "/Users/shannonljohnson-martin/coding/React-Employee-Directory/src/utils/API";
import Container from "/Users/shannonljohnson-martin/coding/React-Employee-Directory/src/components/Container";
import SearchForm from "/Users/shannonljohnson-martin/coding/React-Employee-Directory/src/components/SearchForm";
import SearchResults from "/Users/shannonljohnson-martin/coding/React-Employee-Directory/src/components/SearchResults";

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
                <h1 className="text">Employee Directory Search</h1>
                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    employees={this.state.employees}/>
                <SearchResults results={this.state.results}/>
                <Container/>
            </div>
        )
    }
}

export default Search;

