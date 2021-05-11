import React from "react";
import "./login.css";

export default function Login() {
    return (
        <div className="container-fluid">
            <div className="row align-items-center h-100">
                <div className="col-4 h-100" id="left-side">
                    <h2>Application</h2>
                    <h2>Login Page</h2>
                    <h3 id="content">Login from here to access.</h3>
                </div>
                <form className="col">
                    <div className="col-8">
                        <div className="mb-3">
                            <label htmlFor="email-input" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email-input"
                                aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="password-input"
                                className="form-label"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password-input"
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="checkbox"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkbox"
                            >
                                Check me out
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary d-block mx-auto"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
