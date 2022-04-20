import React from "react";
import {Link, useNavigate} from "react-router-dom";

const CreateAccount = () => {
    const nav = useNavigate();
    const clickHandler = (e) => {
        e.preventDefault();
        console.log("You clicked me!");
        nav("/cc/payment");
    };
    return (
        <div className="d-flex flex-column align-items-center justify-content-evenly">
            <h4 className="c-large-medium mb-0">Enter Personal Details</h4>
            <h5 className="c-small-normal mt-1 mb-4">For a more personalized experience.</h5>

            <form action="" className="c-form d-flex flex-column align-items-center justify-content-evenly">
                <input type="text"
                       id="fname"
                       className="c-input mb-2"
                       placeholder="First Name"/>
                <input type="text"
                       id="lname"
                       className="c-input mb-2"
                       placeholder="Last Name"/>
                <input type="tel"
                       id="phone"
                       className="c-input mb-2"
                       placeholder="Phone Number"/>
                <input type="text"
                       id="dob"
                       className="c-input mb-2"
                       placeholder="Birthday"
                       onFocus={(e) => e.target.type = 'date'}
                />
                <input type="text"
                       id="address"
                       className="c-input mb-2"
                       placeholder="Address"/>
                <input type="text"
                       id="city"
                       className="c-input mb-2"
                       placeholder="City"/>
                <input type="text"
                       id="state"
                       className="c-input mb-2"
                       placeholder="State"/>
                <input type="text" pattern="[0-9]*"
                       id="zipcode"
                       className="c-input mb-2"
                       placeholder="Zipcode"/>

                <button onClick={(e) => clickHandler(e)} type="submit"
                        className="c-button c-medium-medium mt-3">Continue
                </button>

            </form>
            <h5 className="c-small-normal mt-2">Already have an account? <Link to="/cc/login"
                                                                               className="c-link c-small-medium">Log
                in</Link></h5>

        </div>
    );
};

export default CreateAccount;