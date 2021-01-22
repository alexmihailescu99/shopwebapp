import React from "react";
import axios from "axios";
import qs from "qs";
axios.defaults.withCredentials = true
export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: ""
        };
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
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
    
    onSubmit(e) {
        alert(this.state.username + " " + this.state.password);
        axios({
            method: 'post',
            url: 'http://localhost:8080/user/login',
            data: qs.stringify({
              username: this.state.username,
              password: this.state.password
            }),
            headers: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          })
        .then((res) => {
            alert(res.data);
            alert(res.headers.get("set-cookie"));
            alert(res.status);
        })
        .catch((err) => {
            alert("error");
            alert(err);
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>User</label>
                    <input value={this.state.username} onChange={this.onChangeUserName} id="username" type="text" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.onChangePassword} id="password" type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}