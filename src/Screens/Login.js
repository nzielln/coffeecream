import React from "react";
import {Link} from "react-router-dom";

const LogIn = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-evenly">
            <h4 className="c-large-medium mb-4">Log in</h4>
            <form action="" className="c-form d-flex flex-column align-items-center justify-content-evenly">
                    <input type="email"
                           id="email"
                           className="c-input mb-2"
                           placeholder="Enter email"/>
                    <input type="password"
                           id="password"
                           className="c-input mb-2"
                           placeholder="Password"/>

                <button type="submit" className="c-button c-medium-medium mt-3">Log in</button>

            </form>
            <h5 className="c-small-normal mt-2">New here? <Link to="/cc/create" className="c-link c-small-medium">Create an account</Link></h5>

        </div>
);
}

export default LogIn;