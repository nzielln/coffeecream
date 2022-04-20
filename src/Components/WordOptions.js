import React from "react";

const WordOptions = ({option}) => {
    return (
        <button className="c-option c-word c-medium-medium">{option.title}</button>
    );
}
export default WordOptions;