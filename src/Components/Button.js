import React from "react";

const Button = ({title, handleClick}) => {
    return (
        <>
            <button className="c-button c-medium-medium"
                    onClick={() => handleClick()}
            >
                {title}
            </button>
        </>
    );
}

export default Button;