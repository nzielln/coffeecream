import React, {useRef, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";

let v, a, m, d;


const PaymentDetails = () => {
    const [v, setV] = useState("");
    const [a, setA] = useState("");
    const [d, setD] = useState("");
    const [m, setM] = useState("");
    const [noaddress, setNoAddress] = useState("");
    const [address, setAddress] = useState(<></>);
    const [yesaddress, setYesAddress] = useState("");
    const nav = useNavigate();
    const location = useLocation();

    const card = useRef()
    const zipcode = useRef()

    let user = location.state.user;
    console.log(user)
    const clickHandler = (e) => {
        e.preventDefault();

        nav("/cc/menu");
    };

    const vclick = () => {
        setV("checked");
        setA("");
        setM("");
        setD("");
    };

    const mclick = () => {
        setM("checked");
        setA("");
        setV("");
        setD("");
    };

    const dclick = () => {
        setD("checked");
        setA("");
        setM("");
        setV("");
    };

    const aclick = () => {
        setA("checked");
        setV("");
        setM("");
        setD("");
    };

    const noClicked = () => {
        setYesAddress("")
        setNoAddress("check")
        const a = <>
            <input type="text"
                   id="_address"
                   className="c-input mb-2"
                   placeholder="Address"/>
            <input type="text"
                   id="city"
                   className="c-input mb-2"
                   placeholder="City"/>
            <div style={{"width": "100%"}} className="d-flex justify-content-between">
                <input type="text"
                       id="state"
                       className="c-input small mb-2"
                       placeholder="state"
                       onFocus={(e) => e.target.type = 'month'}/>
                <input type="text" pattern="[0-9]*"
                       id="zipcode"
                       className="c-input small mb-2"
                       placeholder="Zipcode"/>
            </div>
        </>
        setAddress(a)

    }

    const yesClicked = () => {
        setYesAddress("check")
        setNoAddress("")
        setAddress(<></>)
    }

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
                       className="c-input mb-2"
                       placeholder="Card Number"/>
                <div style={{"width": "100%"}} className="d-flex justify-content-between">
                    <input type="text"
                            id="expiration"
                            className="c-input small mb-2"
                            placeholder="Expiration Date"
                           onFocus={(e) => e.target.type = 'month'}/>
                    <input type="text" pattern="[0-9]*"
                           id="zipcode"
                           className="c-input small mb-2"
                           placeholder="Zipcode"/>
                </div>
                <fieldset className="mt-3 d-flex flex-column align-items-center justify-content-start mb-2">
                    <legend className="c-small-medium flex-column">Is your billing address the same as your personal address?</legend>
                    <label htmlFor="yes" className="c-small-normal d-flex align-items-center justify-content-start">
                        <input type="checkbox" id="yes" name="address" checked={yesaddress} data-group="address" className="c-check-input me-2"
                               onClick={(e) => yesClicked()}/>
                        Yes
                    </label>
                    <label htmlFor="no" className="c-small-normal d-flex align-items-center justify-content-start">
                        <input type="checkbox" id="no" checked={noaddress} name="address" data-group="address" className="c-check-input me-2"
                               onClick={(e) => noClicked()}/>
                        No
                    </label>
                </fieldset>
                {address}


                <button onClick={(e) => clickHandler(e)} type="submit"
                        className="c-button c-medium-medium mt-3">Save
                </button>

            </form>


        </div>
    );
};

export default PaymentDetails;