import React from "react";
import Profile from "./Profile";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            person: {
                fullName: "Ahmed Ali",
                bio: "I'm a software engineer",
                imgSrc: "/man.png",
                profession: "Software Engineer",
            },
            isShown: false,
        };
    }

    render() {
        return (
            <div>
                {this.state.isShown && <Profile person={this.state.person} />}
                <button
                    className="btn"
                    onClick={() =>
                        this.setState((prev) => ({
                            ...prev,
                            isShown: !prev.isShown,
                        }))
                    }
                >
                    {this.state.isShown ? "Hide Profile" : "Show Profile"}
                </button>
            </div>
        );
    }
}

export default App;
