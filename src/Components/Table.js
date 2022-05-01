import React from "react";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {updateCart} from "../BACKEND/DATABASE/ACTIONS/AuthActions";
import {updateTables} from "../BACKEND/DATABASE/ACTIONS/TableActions";

const Table = ({table}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const selectTable = (e) => {
        e.preventDefault();
        let new_table = {
            ...table,
            reserved: true
        }
        let new_cart = {
            table: {...new_table},
        }
        if(localStorage.getItem("logged_in")) {
            let new_table = {
                ...table,
                reserved: true
            }
            updateCart(dispatch, new_cart).then(() => {
                updateTables(dispatch, new_table)
            })

            navigate("/cc/menu")
        } else if (location.state && location.state.new_cart) {
            let update_cart = {
                ...location.state.new_cart,
                ...new_cart
            }
            let new_table = {
                ...table,
                reserved: true
            }
            updateCart(dispatch, update_cart).then(() => {
                updateTables(dispatch, new_table)
            })
        } else {
            navigate("/login", {state: {new_cart: new_cart}})
        }
    }

    return (
        <div className="c-table d-flex align-items-center flex-column justify-content-center">

            <button className="c-button-noline" onClick={(e) => selectTable(e)}>
                <div className="c-table-cirle d-flex align-items-center position-relative justify-content-center">
                    <h2 className="position-absolute c-large-large-medium">{table.tag}</h2>
                </div>
            </button>
            <h3 className="c-large-medium mt-3">{table.seats} Seats</h3>
        </div>
    );

}

export default Table;