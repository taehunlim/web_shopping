import React, {Component} from "react";

class Navibar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <a className="navbar-brand" href="landing.html">
                        No Named
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mobile-nav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link">
                                    Sign Up
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    Log In
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};

export default Navibar;