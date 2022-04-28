import React from "react";
import {useParams} from "react-router-dom";

import HotDrinkDetailPage from "../../Components/ItemDetail/HotDrinkDetailPage";
import ColdDrinkDetailPage from "../../Components/ItemDetail/ColdDrinkDetailPage";
import BowlDetailPage from "../../Components/ItemDetail/BowlDetailPage";
import PlateDetailPage from "../../Components/ItemDetail/PlateDetailPage";
import PastryDetailPage from "../../Components/ItemDetail/PastryDetailPage";
import {useEffect, useState} from "react";
import {getMenus} from "../../BACKEND/DATABASE/SERVICES/MenuServices";
import BitesDetailPage from "../../Components/ItemDetail/BitesDetailPage";
import {useDispatch, useSelector} from "react-redux";
const size = [
    {
        size: "S",
        quant: "12 oz"
    },
    {
        size: "M",
        quant: "16 oz"
    },
    {
        size: "L",
        quant: "20 oz"
    }
]

const ItemDetailPage = () => {
    //const [menu, setMenu] = useState()
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(   () => {
        async function fetch() {
            await getMenus(dispatch);
        }
        fetch();
    }, [])
    const menu = useSelector(state => state.menu)
    if(!menu) {
        return null
    }

    let detail;
    let name = params.item;
    let submenu = params.submenu;
    let category = params.category;
    let item = menu.find(f => f.name.toLowerCase().replaceAll(" ", "") === name)


    switch (category.split("_")[0]) {
        case "hot":
            detail = <HotDrinkDetailPage item={item}/>
            break;
        case "cold":
            detail = <ColdDrinkDetailPage item={item}/>
            break;
        case "iced":
            detail = <ColdDrinkDetailPage item={item}/>
            break;
        case "bowl":
            detail = <BowlDetailPage item={item}/>
            break;
        case "plate":
            case "sandwich":
            detail = <PlateDetailPage item={item}/>
            break;
        case "pastry":
        case "soup":
            detail = <PastryDetailPage item={item}/>
            break;
        default:
            detail = <BitesDetailPage item={item}/>
            break;
    }
    return (
        <>
            {detail}
        </>
    );
}

export default ItemDetailPage;