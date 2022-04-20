import React from "react";
import Item from "../../Components/Dashboard/Item";
import Person from "../../Components/Dashboard/Person";
import UserIconSmall from "../../Components/UserIconSmall";
import Button from "../../Components/Button";

const People = ({people}) => {
    return (
        <>
            <form action="" id="user-form"/>
            <table className="c-items-table border-top" style={{"width": "100%"}}>
                <thead>
                <tr>
                    <th scope="col" id="c-img" className="c-medium-medium">Image</th>
                    <th scope="col" className="c-medium-medium">First Name</th>
                    <th scope="col" className="c-medium-medium">Last Name</th>
                    <th scope="col" className="c-medium-medium">Email</th>
                    <th scope="col" className="c-medium-medium">Phone Number</th>
                    <th scope="col" className="c-medium-medium">Manages</th>
                    <th scope="col" id="c-icon" className="c-medium-medium">Icons</th>
                </tr>
                </thead>
                <tbody className="c-table-content">
                {
                    people.map(person => {
                        return <Person person={person}/>;
                    })
                }
                <tr className="c-small-normal c-table-row">

                    <td>

                        <label className="c-table-label" htmlFor="img">
                            <i className="fa-solid fa-plus"/>
                        </label>
                        <input className="c-table-input" id="img" type="file" form="user-form"
                               style={{"display": "none"}}/>
                    </td>
                    <td><label className="c-table-label" htmlFor="fname">
                        <input className="c-table-input" id="fname" type="text" form="user-form"
                               placeholder="+"/>
                    </label></td>
                    <td><label className="c-table-label" htmlFor="lname">
                        <input className="c-table-input" id="lname" type="text" form="user-form" placeholder="+"/>
                    </label></td>
                    <td><label className="c-table-label" htmlFor="email">
                        <input className="c-table-input" id="email" type="email" form="user-form" placeholder="+"/>
                    </label></td>
                    <td><label className="c-table-label" htmlFor="phone">
                        <input className="c-table-input"
                               id="phone" type="tel" form="user-form" placeholder="+"/>
                    </label></td>
                    <td><label className="c-table-label" htmlFor="manager">
                        <input className="c-table-input"
                               form="user-form"
                               id="manager"
                               type="text"
                               placeholder="+"/>
                    </label></td>
                    <td>
                        <div>
                            <input className="c-submit-input c-small-medium" form="user-form" type="submit" value="Add Employee"/>
                        </div>
                    </td>

                </tr>
                </tbody>


            </table>
        </>
    );
};

export default People;