import React from "react";

const Item = ({item}) => {
    return (
        <tr className="c-small-normal c-table-row">
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>${item.price.toString().split(".")[1].length === 1 ?
                item.price + 0 : item.price}
            </td>
            <td>{item.nutritional_information.dietary_group}</td>
            <td>{item.description}</td>
            <td className="c-button-row c-small-normal">
                <div className="d-flex align-items-center justify-content-between">
                    <button className="c-button-noline d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-pen d-flex align-items-center justify-content-center"/>
                    </button>
                    <button className="c-button-noline d-flex align-items-center justify-content-center">
                        <i className="fa-regular fa-trash-can d-flex align-items-center justify-content-center"/>
                    </button>
                </div>
            </td>

        </tr>

    );
};

export default Item;