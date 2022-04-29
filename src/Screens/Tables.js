import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTables} from "../BACKEND/DATABASE/ACTIONS/TableActions";
import Table from "../Components/Table";
import {useLocation} from "react-router-dom";

const Tables = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetch() {
            await getTables(dispatch);
        }

        fetch();
    }, []);

    const tables = useSelector(state => state.tables);

    return (
        <>
            <h3 className="c-large-normal" style={{"textAlign": "center"}}>Pick one of the available tables.</h3>
           <div className="c-tables " >
               {tables ?
                  <> {
                       tables.filter(t => !t.reserved).map(table => {
                           return <Table table={table}/>
                       })
                   }
                  </>
                   : <h3 className="c-large-normal" style={{"textAlign": "center"}}>No tables available now.</h3>}

           </div>
        </>
    );
};
export default Tables;