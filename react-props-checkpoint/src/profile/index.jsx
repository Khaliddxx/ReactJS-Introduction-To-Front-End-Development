import PropsType from "prop-types";

const Profile = ({ fullName, bio, profession, handleName, ...props }) => {
    return (
        <div style={{ textAlign: "center" }}>
            {props.children}
            <h1 onClick={handleName} style={{ cursor: "pointer" }}>
                {fullName}
            </h1>
            <h3>{bio}</h3>
            <h4>{profession}</h4>
        </div>
    );
};

export default Profile;

Profile.defaultProps = {
    fullName: "Ahmed Ali",
    bio: "I'm a software engineer",
    profession: "Software Engineer",
    children: null,
    handleName: () => alert("Ahmed Ali"),
};

Profile.propTypes = {
    fullName: PropsType.string,
    bio: PropsType.string,
    profession: PropsType.string,
    children: PropsType.element,
    handleName: PropsType.func,
};
