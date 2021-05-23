import React from "react";

class Profile extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((prev) => ({ count: prev.count + 1 }));
        }, 1000);
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <img src={this.props.person.imgSrc} alt="profile" width="200" />
                <h1>{this.props.person.fullName}</h1>
                <h3>{this.props.person.bio}</h3>
                <h4>{this.props.person.profession}</h4>
                <h5>
                    This component is mounted {this.state.count}
                    {this.state.count > 1 ? " seconds" : " second"} ago
                </h5>
            </div>
        );
    }
}

export default Profile;
