import axios from "axios";
import React from "react";

export default class LogoutService extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get("http://localhost:8080/user/logout")
        .then(res => {
            alert(res.data);
            localStorage.setItem("user", "");
            localStorage.setItem("logged", false);
        })
        .catch(err => {
            alert(err);
        })
    }

    render() {
        return (
            <h1>See you later</h1>
        );
    }
}