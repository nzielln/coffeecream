import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {combineReducers, legacy_createStore as createStore} from "redux";
import CartReducer from "./BACKEND/CartReducer";
import {Provider} from "react-redux";
import UserReducer from "./BACKEND/UserReducer";
import OrderReducer from "./BACKEND/OrderReducer";
import EmployeeReducer from "./BACKEND/EmployeeReducer";
import TypeReducer from "./BACKEND/TypeReducer";
import MenuReducer from "./BACKEND/MenuReducer";
import CafeReducer from "./BACKEND/CafeReducer";

const reducer = combineReducers({
    cart: CartReducer,
    user: UserReducer,
    orders: OrderReducer,
    employees: EmployeeReducer,
    role: TypeReducer,
    menu: MenuReducer,
    cafe: CafeReducer
})
const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
