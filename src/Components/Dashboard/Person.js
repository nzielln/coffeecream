import React from "react";
import UserIconSmall from "../UserIconSmall";

const Person = ({person}) => {
    return (
        <tr className="c-small-normal c-table-row">

            <td>
                <UserIconSmall user={person}/>
            </td>
            <td>{person.first_name}</td>
            <td>{person.last_name}</td>
            <td>{person.email}</td>
            <td>{person.phone_number}</td>
            <td>{person.role.manages}</td>
            <td className="c-button-row c-small-normal" >
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

export default Person;

