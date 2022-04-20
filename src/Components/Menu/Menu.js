import React, {useState} from "react";
import MenuItem from "./MenuItem";


const Menu = ({items}) => {
    const [hideMenu, showMenu] = useState(false)
    let translate, button;
    if (!hideMenu) {
        translate = "\"transform\": \"translateX(100%)\""
    } else {
        translate = "\"transform\": \"translateX(0%)\""
    }


    return (
        <div className="c-menu d-flex justify-content-end">
           <div className="c-menu-item d-flex flex-column justify-content-between align-content-end p-5">
              <button className="c-button-noline">
                  <i className="fa-solid fa-xmark d-flex align-items-start"/>
              </button>
               {
               items.map(item => {
                   return <MenuItem item={item}/>;
               })
           }
               <button className="c-button-noline p-0 m-0 d-flex align-items-end"
               >
                   <h4 className="c-small-normal m-0"
                       style={{
                           "width": "100%",
                           "textAlign": "right"
                       }}>Sign out</h4>
               </button>
           </div>
        </div>
    );
};

export default Menu;