import PropsType from "prop-types";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
    return (
        <div style={{ textAlign: "center" }}>
            <img src={children} alt="profile" width="200" />
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
    children: "/man.png",
    handleName: () => alert("Ahmed Ali"),
};

Profile.propTypes = {
    fullName: PropsType.string,
    bio: PropsType.string,
    profession: PropsType.string,
    children: PropsType.string,
    handleName: PropsType.func,
};
