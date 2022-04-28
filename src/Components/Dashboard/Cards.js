import React, {useState, useEffect} from "react";
import DashItem from "../../Components/Dashboard/DashItem";
import {useDispatch, useSelector} from "react-redux";
import {getEmployeeById} from "../../BACKEND/DATABASE/ACTIONS/EmployeeActions";
import {getCafe} from "../../BACKEND/DATABASE/ACTIONS/CafeActions";

const Card = () => {
    const dispatch = useDispatch()
    const [cafe_manager, setManager ] = useState()
    useEffect(() => {
        async function fetch() {
            await getCafe(dispatch)
        }
        fetch()
    }, [])
    const cafe = useSelector(state => state.cafe)
    const manager = useSelector(state => state.employees)
    if (cafe.manager && !cafe_manager) {
        getEmployeeById(dispatch, cafe.manager).then(r => console.log(""))
        setManager(manager)
    }

    if(!manager) {
        return null
    }
    return (
        <>
            <h4 className="c-medium-normal"><span className="c-medium-bold">Location:</span> {cafe.name}</h4>
            <h4 className="c-medium-normal"><span className="c-medium-bold">Manager:</span> {manager.first_name} {manager.last_name}</h4>
            <h4 className="c-medium-normal"><span className="c-medium-bold">Chairs:</span> {cafe.number_of_chairs}</h4>
            <h4 className="c-medium-normal"><span className="c-medium-bold">Tables:</span> {cafe.number_of_tables}</h4>
            <h4 className="c-medium-normal"><span className="c-medium-bold">Capacity:</span> {cafe.capacity}</h4>
            <div className="d-flex align-items-center justify-content-evenly mt-5" style={{"width": "50%"}}>
                <DashItem item={{title: "View Orders", link: "orders"}}/>
                <DashItem item={{title: "Edit Menu", link: "items"}}/>
            </div>
            <div className="d-flex align-items-center justify-content-evenly mt-4" style={{"width": "50%"}}>
                <DashItem item={{title: "Edit Roaster", link: "users"}}/>
                <DashItem item={{title: "Edit Cafe Details", link: "details"}}/>
            </div>
        </>
    );
}

export default Card;