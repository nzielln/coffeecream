import * as table_services from "../SERVICES/TableServices"

export const GET_TABLES = "GET_TABLES";
export const UPDATE_TABLE = "UPDATE_TABLE"
export const CREATE_TABLE = "UPDATE_TABLE"
export const DELETE_TABLE = "UPDATE_TABLE"

export const getTables = async (dispatch) => {
    const tables = await table_services.getTables();
    dispatch({
        type: GET_TABLES,
        tables: tables
    })
}

export const updateTables = async (dispatch, table) => {
    const status = await table_services.updateTable(table);
    dispatch({
        type: UPDATE_TABLE,
        table: table
    })
}

export const createTables = async (dispatch, new_table) => {
    const table = await table_services.createTable(new_table);
    dispatch({
        type: CREATE_TABLE,
        table: table
    })
}

export const deleteTable = async (dispatch, table_id) => {
    const status = await table_services.deleteTable(table_id);
    dispatch({
        type: DELETE_TABLE,
        table_id: table_id
    })
}