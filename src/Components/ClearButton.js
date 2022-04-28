import React from "react";

const ClearButton = ({title, handleClick}) => {
    return (
        <>
            <button className="c-button c-medium-medium c-clear"
                    onClick={() => handleClick()}
            >
                {title}
            </button>
        </>
    );
}

export default ClearButton;