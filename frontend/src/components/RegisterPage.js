import React from "react";
import axios from "axios";
axios.defaults.withCredentials = true
export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
          email: ""
        };
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUserName(e) {
        this.setState({
            username: e.target.value
          });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
          });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
          });
    }
    
    async onSubmit(e) {
        alert(this.state.username + " " + this.state.password);
        await axios.post("http://localhost:8080/user/register", {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        })
        .then((res) => {
            alert(res.status);
        })
        .catch((err) => {
            alert(err);
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>

                <h3>Register</h3>

                <div className="form-group">
                    <label>User</label>
                    <input value={this.state.username} onChange={this.onChangeUserName} id="username" type="text" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.onChangePassword} id="password" type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input value={this.state.email} onChange={this.onChangeEmail} id="email" type="text" className="form-control" placeholder="Enter email" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Create account</button>
                <p className="forgot-password text-right">
                    Already have an <a href="/login">account</a>?
                </p>
            </form>
        );
    }
}