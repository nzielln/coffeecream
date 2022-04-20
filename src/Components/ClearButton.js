import React from "react";

const ClearButton = ({title}) => {
    return (
        <>
            <button className="c-button c-medium-medium c-clear">
                {title}
            </button>
        </>
    );
}

export default ClearButton;