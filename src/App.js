import "./Style/css/main.css";
import CoffeeCream from "./Components/CoffeeCream";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from "./Screens/Home";
import Dashboard from "./Screens/Dashboard/Dashboard";
import Login from "./Screens/Login";
import CreateAccount from "./Screens/CreateAccount/CreateAccount";
import PaymentDetails from "./Screens/CreateAccount/PaymentDetails";
import Profile from "./Screens/Profile";
import People from "./Screens/Dashboard/People";
import Items from "./Screens/Dashboard/Items";
import ItemsMenu from "./Screens/Menu/ItemsMenu";
import CategoryMenu from "./Screens/Menu/CategoryMenu";
import ItemDetailPage from "./Screens/Menu/ItemDetailPage";
import OrderLine from "./Screens/Dashboard/OrderLine";
import FoodMenu from "./Screens/Menu/FoodMenu";
import CafeDetails from "./Screens/Dashboard/CafeDetails";
import Menu from "./Components/Menu/Menu";
import Scrap from "./Screens/Scrap";
import Cards from "./Components/Dashboard/Cards";
import PersonalDetails from "./Screens/CreateAccount/PersonalDetails";


const menu_items = [
    {
        name: "Profile",
        path: "profile"

    },
    {
        name: "Menu",
        path: "menu"

    }
];

function App() {
    return (
        <Router>
            <div className="container-fluid p-0">
                <Routes>
                    <Route path="" element={<Navigate replace to="/login"/> }/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="create" element={<CreateAccount/>}/>
                    <Route path="personal" element={<PersonalDetails/>}/>
                    <Route path="payment" element={<PaymentDetails/>}/>
                    <Route path="cc"
                           element={<CoffeeCream/>}>
                        <Route path="home" element={<Home/>}/>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="menu" element={<FoodMenu/>}/>
                        <Route path="menu/:submenu" element={<ItemsMenu/>}/>
                        <Route path="menu/:submenu/:category" element={<CategoryMenu/>}/>
                        <Route path="menu/:submenu/:category/:item" element={<ItemDetailPage/>}/>
                    </Route>

                    <Route path="dashboard" element={<Dashboard/>}>
                        <Route index element={<Cards/>}/>
                        <Route path="users" element={<People/>}/>
                        <Route path="items" element={<Items/>}/>
                        <Route path="orders" element={<OrderLine/>}/>
                        <Route path="details" element={<CafeDetails/>}/>
                    </Route>

                </Routes>
            </div>
        </Router>
    );
}

export default App;
