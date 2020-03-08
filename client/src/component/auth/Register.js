import React, {Component} from "react";
import {Button} from 'reactstrap';
import axios from 'axios';
import classnames from 'classnames';


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
        this.setState({[e.target.name] : e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
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
            .catch(err => this.setState({errors: err.response.data}));
        console.log('errors', this.state.errors)
    }


    render() {

        const {errors} = this.state;

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1>Sign Up</h1>
                            <p>Sign Up at No Named</p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            'is-invalid' : errors.name
                                        })}
                                        placeholder="Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.SignupChange}
                                    />
                                    {errors.name && (
                                        <div className="invalid-feedback">{errors.name}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className={classnames("form-control form-control-lg", {
                                            'is-invalid' : errors.email
                                        })}
                                        placeholder="Email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.SignupChange}
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className={classnames("form-control form-control-lg", {
                                           'is-invalid' : errors.password
                                        })}
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.SignupChange}
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback">{errors.password}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className={classnames("form-control form-control-lg", {
                                            'is-invalid' : errors.password2
                                        })}
                                        placeholder="Confirm Password"
                                        name="password2"
                                        value={this.state.password2}
                                        onChange={this.SignupChange}
                                    />
                                    {errors.password2 && (
                                        <div className="invalid-feedback">{errors.password2}</div>
                                    )}
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