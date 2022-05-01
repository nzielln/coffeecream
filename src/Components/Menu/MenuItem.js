import React from "react";
import {Link} from "react-router-dom";

const MenuItem = ({item}) => {

    return (
        <>
            {item.name === "Profile" ?
                <Link to={`/${item.path}`} className="c-link me-3">
                    <h4 className="c-small-normal">{item.name}</h4>
                </Link> :
                <Link to={`/cc/${item.path}`} className="c-link me-3">
                    <h4 className="c-small-normal">{item.name}</h4>
                </Link>
            }
        </>

    );
};

export default MenuItem;