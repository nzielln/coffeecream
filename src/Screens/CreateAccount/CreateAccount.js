import React, {useRef} from "react";
import {Link, useNavigate} from "react-router-dom";

const CreateAccount = () => {
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();

    if (localStorage.getItem("logged_in")) {
        navigate("/home");
    }


    const clickHandler = (e) => {
        e.preventDefault();
        const user = {
            email: email.current.value,
            password: password.current.value,
        };
        navigate("/personal", {state: {user: user}});
    };
    return (
        <div className="d-flex flex-column align-items-center justify-content-evenly">
            <h4 className="c-large-medium mb-0">Create an account</h4>
            <h5 className="c-small-normal mt-1 mb-5">For a more personalized experience.</h5>

            <form action="" className="c-form d-flex flex-column align-items-center justify-content-evenly"
                  onSubmit={(e) => clickHandler(e)}>
                <input type="text"
                       id="email"
                       className="c-input mb-2"
                       placeholder="Email"
                       ref={email}
                />
                <input type="password"
                       id="password"
                       className="c-input mb-2"
                       placeholder="Password"
                       ref={password}
                />
                <button onClick={(e) => clickHandler(e)} type="submit"
                        className="c-button c-medium-medium mt-3">Continue
                </button>

            </form>
            <h5 className="c-small-normal mt-5">Already have an account?
                <Link to="/login" className="c-link c-small-medium"> Log in</Link>
            </h5>


        </div>
    );
};

export default CreateAccount;