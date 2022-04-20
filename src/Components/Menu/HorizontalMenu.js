import React from "react";
import MenuItem from "./MenuItem";


const HorizontalMenu = ({items, loggedin}) => {
    if (loggedin) {

    }
    return (
        <div className="c-hmenu d-flex justify-content-start position-absolute top-50 start-0 translate-middle-y">
            <div className="c-menu-item d-flex justify-content-between align-items-center p-2">
                {
                    items.map(item => {
                        return <MenuItem item={item}/>;
                    })
                }
                {
                    loggedin ?
                        <button className="c-button-noline p-0 m-0 d-flex align-items-center">
                            <h4 className="c-small-medium m-0" style={{"width": "100%", "textAlign": "right"}}>Sign
                                out</h4>
                        </button> : ""
                }
            </div>
        </div>
    );
};

export default HorizontalMenu;