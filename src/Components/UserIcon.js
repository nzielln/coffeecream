import React from "react";

const UserIcon = ({user}) => {
    console.log(user)
    return (
        <div className="c-food-icon d-flex flex-column justify-content-center align-items-center">
            <img className="c-u-medium" src={`/Images/people/${user.image}`} alt=""/>
            <h3 className="c-medium-bold">{user.title}</h3>
        </div>
    );
}

export default UserIcon;