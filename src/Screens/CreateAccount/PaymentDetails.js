import React, {useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {signUpCustomer} from "../../BACKEND/DATABASE/SERVICES/AuthServices";

const PaymentDetails = () => {
    const [v, setV] = useState("");
    const [a, setA] = useState("");
    const [d, setD] = useState("");
    const [m, setM] = useState("");
    const [no, setNo] = useState("");
    const [yes, setYes] = useState("");
    const [type, setType] = useState("");
    const [def, setDef] = useState(false);
    const nav = useNavigate();
    const location = useLocation();

    const card = useRef();
    const zipcode = useRef();
    const bank = useRef();

    let user = location.state.user;
    const clickHandler = (e) => {
        e.preventDefault();
        user = {
            ...user,
            payment: {
                card_number: card.current.value,
                type: type,
                is_default: def,
                bank: bank.current.value,
                zipcode: zipcode.current.value,
            },
            is_regular: true
        };
        signUpCustomer(user).then(r => console.log());
        localStorage.setItem("logged_in", "Customer");
        nav("/cc/menu");
    };

    const vclick = () => {
        setV("checked");
        setA("");
        setM("");
        setD("");
        setType("Visa");
    };

    const mclick = () => {
        setM("checked");
        setA("");
        setV("");
        setD("");
        setType("MasterCard");
    };

    const dclick = () => {
        setD("checked");
        setA("");
        setM("");
        setV("");
        setType("Discover");
    };

    const aclick = () => {
        setA("checked");
        setV("");
        setM("");
        setD("");
        setType("American Express");
    };

    const noClicked = () => {
        setYes("");
        setNo("check");
        setDef(false);
    };

    const yesClicked = () => {
        setYes("check");
        setNo("");
        setDef(true);
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-evenly">
            <h4 className="c-large-medium mb-0">Enter Payment Details</h4>
            <h5 className="c-small-normal mt-1 mb-4">For a more personalized experience.</h5>

            <form action="" className="c-form d-flex flex-column align-items-center justify-content-evenly">
                <fieldset className="mb-4">
                    <legend className="c-small-medium">Choose a payment method:</legend>
                    <label htmlFor="visa">
                        <i className={`fa-brands fa-cc-visa ${v}`}/>
                        <input type="radio" id="visa" name="card" value="Visa" className="c-radio-input"
                               onClick={(e) => vclick()}/>
                    </label>
                    <label htmlFor="master">
                        <i className={`fa-brands fa-cc-mastercard ${m}`}/>
                        <input type="radio" id="master" name="card" value="MasterCard" className="c-radio-input"
                               onClick={(e) => mclick()}/>
                    </label>
                    <label htmlFor="discover">
                        <i className={`fa-brands fa-cc-discover ${d}`}/>
                        <input type="radio" id="discover" name="card" value="Discover" className="c-radio-input"
                               onClick={(e) => dclick()}/>
                    </label>
                    <label htmlFor="amex">
                        <i className={`fa-brands fa-cc-amex ${a}`}/>
                        <input type="radio" id="amex" name="card" value="American Express" className="c-radio-input"
                               onClick={(e) => aclick()}/>
                    </label>

                </fieldset>
                <input type="text"
                       id="cardnumber"
                       ref={card}
                       className="c-input mb-2"
                       placeholder="Card Number"/>
                <div style={{"width": "100%"}} className="d-flex justify-content-between">
                    <input type="text"
                           id="bank"
                           ref={bank}
                           className="c-input small mb-2"
                           placeholder="Bank"
                    />
                    <input type="text" pattern="[0-9]*"
                           id="zipcode"
                           ref={zipcode}
                           className="c-input small mb-2"
                           placeholder="Zipcode"/>
                </div>
                <fieldset className="mt-3 d-flex flex-column align-items-center justify-content-start mb-2">
                    <legend className="c-small-medium flex-column">Make this your default card?</legend>
                    <label htmlFor="yes" className="c-small-normal d-flex align-items-center justify-content-start">
                        <input type="checkbox" id="yes" name="address" value="Yes" checked={yes} data-group="address"
                               className="c-check-input me-2"
                               onClick={(e) => yesClicked()}/>
                        Yes
                    </label>
                    <label htmlFor="no" className="c-small-normal d-flex align-items-center justify-content-start">
                        <input type="checkbox" id="no" checked={no} value="No" name="address" data-group="address"
                               className="c-check-input me-2"
                               onClick={(e) => noClicked()}/>
                        No
                    </label>
                </fieldset>

                <button onClick={(e) => clickHandler(e)} type="submit"
                        className="c-button c-medium-medium mt-3">Save
                </button>

            </form>
        </div>
    );
};

export default PaymentDetails;