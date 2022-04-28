import React from "react";
import {Link} from "react-router-dom";

const DashItem = ({item}) => {
    return (
        <Link to={`/dashboard/${item.link}`} className="c-link d-flex align-items-center justify-content-center">
            <div className="c-dash-item c-large-large-medium d-flex align-items-center justify-content-center">{item.title}</div>
        </Link>

    );
}

export default DashItem