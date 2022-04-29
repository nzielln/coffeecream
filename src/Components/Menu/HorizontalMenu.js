import React, {useEffect} from "react";
import MenuItem from "./MenuItem";
import {signOut} from "../../BACKEND/DATABASE/SERVICES/AuthServices";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCart} from "../../BACKEND/DATABASE/ACTIONS/AuthActions";
import {updateTables} from "../../BACKEND/DATABASE/ACTIONS/TableActions";


const HorizontalMenu = ({items, logged_in}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetch() {
            await getCart(dispatch)
        }
        fetch()
    }, [])
    const cart = useSelector(state => state.cart)
    const logOut = async () => {
        console.log(cart)
        signOut().then(() => {
        if (cart.table
            && !(cart.food_items && cart.drink_items && cart.merch )) {
            let table = {
                ...cart.table,
                reserved: false
            }
            updateTables(dispatch, table)
        }
        localStorage.clear()
        navigate("/login")
        })

    }

    const goToDashboard = (e) => {
        navigate("/dashboard")
    }

    return (
        <div className="c-hmenu d-flex justify-content-start position-absolute top-50 start-0 translate-middle-y">
            <div className="c-menu-item d-flex justify-content-between align-items-center p-2">
                {
                    items.map(item => {
                        return <MenuItem item={item}/>;
                    })
                }
                {
                    localStorage.getItem("logged_in") === "Employee" ?
                        <button className="c-button-noline p-0 m-0 d-flex align-items-center me-3" onClick={() => goToDashboard()}>
                            <h4 className="c-small-medium m-0" style={{"width": "100%", "textAlign": "right"}}>Dashboard</h4>
                        </button> : null
                }

                {
                    logged_in ?
                        <button className="c-button-noline p-0 m-0 d-flex align-items-center me-3" onClick={() => logOut()}>
                            <h4 className="c-small-medium m-0" style={{"width": "100%", "textAlign": "right"}}>Sign
                                out</h4>
                        </button> : null
                }
            </div>
        </div>
    );
};

export default HorizontalMenu;