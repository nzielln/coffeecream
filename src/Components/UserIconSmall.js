import React from "react";

const UserIconSmall = ({user}) => {
    return (
        <div className="c-food-icon d-flex flex-column justify-content-center align-items-center">
            <img className="c-u-small" src={`/Images/people/${user.profile}`} alt=""/>
        </div>
    );
}

export default UserIconSmall;