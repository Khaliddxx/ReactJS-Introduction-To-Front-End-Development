import React from 'react';
import profilePic from './dogeMe.jpg'

const ProfilePhoto = () => {
    return (
        <React.Fragment>
            <div className="profileImage-cont">
                <img  className="profileImage" src={profilePic} alt='myImage' />
                <div class="overlay">
                    <div class="text">Hello World!</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfilePhoto
