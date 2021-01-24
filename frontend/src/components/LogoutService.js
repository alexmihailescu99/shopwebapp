import axios from "axios";
import React from "react";

export default class LogoutService extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get("http://localhost:8080/user/logout")
        .then(res => {
            localStorage.setItem("user", null);
            localStorage.setItem("logged", "false");
            localStorage.setItem("role", "ANON");
            window.location.href = "/";
        })
        .catch(err => {
            alert(err.response.status);
        })
    }

    render() {
        return (
            <h1>See you later</h1>
        );
    }
}