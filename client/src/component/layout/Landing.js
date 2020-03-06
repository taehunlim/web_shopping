import React, {Component} from "react";
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="landing-inner dark-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="display-3 mb-4">LimTae</h1>
                                <p className="lead">welcome!</p>
                                <hr/>
                                <Button color="info">
                                    <Link to="register">
                                        Sign Up
                                    </Link>
                                </Button>{"  "}
                                <Button color="primary">
                                    <Link to="login">
                                        Log In
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Landing;