import React from "react";

const CharOptions = ({option}) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <button className="c-option c-char c-medium-medium mb-2">{option.size}</button>
            <h2 className="c-xsmall-normal">{option.quant}</h2>
        </div>
    );
}
export default CharOptions;