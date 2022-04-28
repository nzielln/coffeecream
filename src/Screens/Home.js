import React, {useEffect} from "react";
import HorizontalHeader from "../Components/HorizontalHeader";
import {Link, useNavigate} from "react-router-dom";
import {getMenus} from "../BACKEND/DATABASE/SERVICES/MenuServices";
import {getUserSession} from "../BACKEND/DATABASE/SERVICES/AuthServices";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../BACKEND/DATABASE/ACTIONS/AuthActions";
const menu_items = [
    {
        name: "Profile",
        path: "profile"

    },
    {
        name: "Menu",
        path: "menu"

    }
]
const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    useEffect(   () => {
        async function fetch() {
            await getUser(dispatch);
        }
        fetch();
    }, [])

    if(user === {}) {
        navigate("/login")
    }

    const handleClick = (e) => {
        e.preventDefault()
        if (user === {}) {
            navigate("/login")
        } else {
            navigate("/cc/menu")
        }
    }

    return (
        <>
            <div className="d-flex flex-column justify-content-center position-relative" style={{"paddingLeft": "50px", "paddingRight": "50px", "paddingTop": "25px", "paddingBottom": "25px"}}>
                <div className="c-home d-flex flex-column justify-content-center align-content-center">
                    <h3 className="c-large-normal" style={{"textAlign": "center"}}>Scan a table to get started.</h3>
                    <button className="c-button-noline" onClick={(e) => handleClick(e)}> <span className="d-flex justify-content-center"><img src="/Assets/phone.svg" alt=""/></span></button>
                </div>
            </div>

        </>
    );
};

export default Home;