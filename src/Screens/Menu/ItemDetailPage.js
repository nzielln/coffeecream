import React from "react";
import {useParams} from "react-router-dom";
import CharOptions from "../../Components/CharOptions";
import FoodIconMediumNoLink from "../../Components/Icons/FoodIconMediumNoLink";
import foods from "../../Data/food.json"
import drinks from "../../Data/drinks.json";
import merch from "../../Data/merchmenu.json";
import HotDrinkDetailPage from "../../Components/ItemDetail/HotDrinkDetailPage";
import ColdDrinkDetailPage from "../../Components/ItemDetail/ColdDrinkDetailPage";
import BowlDetailPage from "../../Components/ItemDetail/BowlDetailPage";
import PlateDetailPage from "../../Components/ItemDetail/PlateDetailPage";
import PastryDetailPage from "../../Components/ItemDetail/PastryDetailPage";
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
    let params = useParams();
    let items, detail;
    let name = params.item;
    let submenu = params.submenu;
    let category = params.category;
    if (submenu === "food") {
        items = foods
    } else if (submenu === "drinks") {
        items = drinks
    } else {
        items = merch
    }
    let item = items.find(f => f.name.toLowerCase().replaceAll(" ", "") === name)


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
        case "bowls":
            detail = <BowlDetailPage item={item}/>
            break;
        case "plates":
            detail = <PlateDetailPage item={item}/>
            break;
        case "pastry":
            detail = <PastryDetailPage item={item}/>
            break;
        default:
            break;
    }
    console.log(name)
    console.log(item.name.toLowerCase().replaceAll(" ", ""))
    console.log(category.split("_")[0])
    console.log(submenu)
    return (
        <>
            {detail}
        </>
    );
}

export default ItemDetailPage;