import React, {Component} from "react";
import {Button} from 'reactstrap'
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
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
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