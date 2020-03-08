import React, {Component} from "react";
import {Button} from 'reactstrap';
import axios from 'axios';


class Register extends Component{
    constructor() {
        super();
        this.state = {
            name : '',
            email : '',
            password : '',
            password2 : '',
            errors : {}
        }
    }

    SignupChange = (e) => {
        this.setState({[e.target.name] : e.target.value })
    };

    onSubmit = (e) => {
        const newUser = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password,
            password2 : this.state.password2
        };

        console.log(newUser)

        axios
            .post('/user/signup', newUser)
            .then(user => console.log(user.data))
            .catch(err => console.log(err.message))


    }


    render() {
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1>Sign Up</h1>
                            <p>Sign Up at No Named</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.SignupChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.SignupChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.SignupChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Confirm Password"
                                        name="password2"
                                        value={this.state.password2}
                                        onChange={this.SignupChange}
                                    />
                                </div>
                                <Button color="primary" size="lg" block>Sign Up</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};


export default Register;