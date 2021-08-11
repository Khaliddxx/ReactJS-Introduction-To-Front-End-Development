import PropType from "prop-types";
import React from 'react'

const Profile = ({fullName, bio, profession, handleName, ...props}) => {
    return (
        <div>
            {props.children}
            <h1 style={{cursor:'pointer'}} onClick={handleName}>{fullName}</h1>
            <h2>{bio}</h2>
            <h3>{profession}</h3>
        </div>
    )
}

export default Profile


Profile.defaultProps = {
    fullName: "Khalid Ahmed",
    bio: "A coffee engineer with a computer problem",
    profession: "Student",
    children: null,
    handleName: null
}

Profile.propTypes = {
    fullName: PropType.string,
    bio: PropType.string,
    profession: PropType.string,
    children: PropType.element,
    handleName: PropType.func,
}