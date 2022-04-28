import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import FoodCard from "../../Components/FoodCard";
import {useDispatch, useSelector} from "react-redux";
import {getMenus} from "../../BACKEND/DATABASE/ACTIONS/MenuActions";

//SubMenu
const CategoryMenu = () => {
    //const [menu, setMenu] = useState()
    let params = useParams();
    let category = params.category;
    let submenu = params.submenu
    const dispatch = useDispatch()
    useEffect(   () => {
        async function fetch() {
            await getMenus(dispatch);
        }
        fetch();
    }, [])
    const menu = useSelector(state => state.menu)

    console.log(menu)
    if(!menu) {
        return null
    }
    return (
        <div className="c-menu-grid-four"
             style={{"paddingLeft": "160px", "paddingRight": "160px", "paddingTop": "120px", "flexBasis": "33.333333%"}}>
            { menu ?
                menu.filter(f => f.subtype.toLowerCase() === category.replace("_", " ")).map(m => {
                    return <FoodCard item={m}/>
                }) : null
            }

        </div>
    );
}

export default CategoryMenu;