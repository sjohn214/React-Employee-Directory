import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getRandomUsers: function() {
        return axios.get("https://randomuser.me/api/?gender=female")
    }
};
