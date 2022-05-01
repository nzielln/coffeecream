import React, {useEffect, useState} from "react";
import OrderItem from "../../Components/Dashboard/OrderItem";
import {getUser} from "../../BACKEND/DATABASE/ACTIONS/AuthActions";
import {useDispatch, useSelector} from "react-redux";
import {getOrders, updateOrder, deleteOrder} from "../../BACKEND/DATABASE/ACTIONS/OrderActions";

const OrderLine = () => {
    const [c_orders, setOrders] = useState()
    //useStateconst [backup, setBackup] = useState()
    const dispatch = useDispatch()
    const orders = useSelector(state => state.user_orders)
    const [all, setAll] = useState("-light")
    const [completed, setCompleted] = useState("")
    const [cancelled, setCancelled] = useState("")
    const [notcompleted, setNotCompleted] = useState("")
    useEffect(() => {
        async function fetch() {
            await getOrders(dispatch)
        }
        fetch();
        setOrders(orders)

    }, [])


    const setA = (e) => {
        setAll(all === "" ? "-light" : "")
        setCompleted("")
        setNotCompleted("")
        setOrders(orders)
        setCancelled("")


    }

    const setC = (e) => {
        setCompleted(completed === "" ? "-light" : "")
        setAll("")
        setNotCompleted("")
        setCancelled("")
        setOrders(orders.filter(o => o.completed))


    }

    const setNC = (e) => {
        setNotCompleted(notcompleted === "" ? "-light" : "")
        setAll("")
        setCompleted("")
        setCancelled("")
        setOrders(orders.filter(o => !o.completed))

    }

    const setCL = (e) => {
        setCancelled(cancelled === "" ? "-light" : "")
        setNotCompleted("")
        setAll("")
        setCompleted("")
        setOrders(orders.filter(o => o.cancelled))

    }

    if(!c_orders) {
        return null
    }
    return (
        <div style={{"width": "100%"}}>
           <div className="d-flex " style={{"width": "40%"}}>
               <button className={`c-button${all} c-less-padding c-medium-medium m-2`}
                       onClick={(e) => setA(e)}
               >All</button>
               <button className={`c-button${completed} c-less-padding c-medium-medium m-2`}
                       onClick={(e) => setC(e)}
               >Completed</button>
               <button className={`c-button${notcompleted} c-less-padding c-medium-medium m-2`}
                       onClick={(e) => setNC(e)}
               >Not Completed</button>
               <button className={`c-button${cancelled} c-less-padding c-medium-medium m-2`}
                       onClick={(e) => setCL(e)}
               >Cancelled</button>

           </div>
            <div className="c-menu-grid-four mt-3">
                {
                    c_orders.map && c_orders.map(order => {
                        return <OrderItem order={order}/>
                    })
                }
            </div>

        </div>
    );
}

export default OrderLine;