import React from "react";

const Button = ({title}) => {
    return (
        <>
            <button className="c-button c-medium-medium">
                {title}
            </button>
        </>
    );
}

export default Button;