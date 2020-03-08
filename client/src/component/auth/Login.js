import React, {Component} from "react";
import {Button} from "reactstrap";
import axios from 'axios';


class Login extends Component {

    constructor() {
        super();
        this.state = {
            email : '',
            password : '',
            errors : {}
        }

        // this.LoginChange = this.LoginChange.bind(this); //this 와 loginChange를 결합하는 함
        // this.onSubmit = this.onSubmit.bind(this);
    }



    LoginChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    onSubmit =(e) => {
        e.preventDefault();
        const newUser = {
            email : this.state.email,
            password : this.state.password
        };

        axios
            .post('/user/login', newUser)
            .then(user => console.log(user.data))
            .catch(err => console.log(err.message));
    }

    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">Log In at No Named</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.LoginChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.LoginChange}
                                    />
                                </div>
                                <Button color="primary" size="lg" block>LogIn</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};


export default Login;