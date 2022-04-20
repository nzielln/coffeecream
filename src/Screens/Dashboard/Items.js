import React from "react";
import Item from "../../Components/Dashboard/Item";

const Items = ({items}) => {
    return (
        <>
            <form action="" id="item-form"/>

            <table className="c-items-table border-top" style={{"width": "100%"}}>
                <thead>
                <tr>
                    <th scope="col" className="c-medium-medium">Name</th>
                    <th scope="col" className="c-medium-medium">Category</th>
                    <th scope="col" className="c-medium-medium">Price</th>
                    <th scope="col" className="c-medium-medium">Dietary Group</th>
                    <th scope="col" className="c-medium-medium">Description</th>
                    <th scope="col" id="c-icon" className="c-medium-medium">Icons</th>
                </tr>
                </thead>
                <tbody className="c-table-content">
                {
                        items.map(item => {
                            return <Item item={item}/>
                        })
                }
                <tr className="c-small-normal c-table-row">

                    <td><label className="c-table-label" htmlFor="name">
                        <input className="c-table-input" id="name" type="text" form="item-form"
                               placeholder="+"/>
                    </label></td>
                    <td><label className="c-table-label" htmlFor="category">
                        <input className="c-table-input" id="category" type="text" form="item-form" placeholder="+"/>
                    </label></td>
                    <td><label className="c-table-label" htmlFor="price">
                        <input className="c-table-input" id="price" type="text" form="item-form" placeholder="+"/>
                    </label></td>
                    <td><label className="c-table-label" htmlFor="diet">
                        <input className="c-table-input"
                               id="diet" type="text" form="item-form" placeholder="+"/>
                    </label></td>
                    <td><label className="c-table-label" htmlFor="desc">
                        <input className="c-table-input"
                               form="item-form"
                               id="desc"
                               type="text"
                               placeholder="+"/>
                    </label></td>
                    <td>
                        <div>
                            <input className="c-submit-input c-small-medium" form="item-form" type="submit" value="Add New Item"/>
                        </div>
                    </td>

                </tr>
                </tbody>

            </table>
        </>
    );
}

export default Items;