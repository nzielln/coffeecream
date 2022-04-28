import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCafe, updateCafe} from "../../BACKEND/DATABASE/ACTIONS/CafeActions";
import {useNavigate} from "react-router-dom";

const CafeDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        async function fetch() {
            await getCafe(dispatch)
        }
        fetch()
    }, [])
    const cafe = useSelector(state => state.cafe)

    const tables = useRef();
    const chairs = useRef();
    const capacity = useRef();

    const updateCurrentCafe = async (e) => {
        e.preventDefault();
        let new_cafe = {
            ...cafe,
            capacity: capacity.current.value,
            number_of_chairs: chairs.current.value,
            number_of_tables: tables.current.value,
        }
        await updateCafe(dispatch, new_cafe)
        navigate("/dashboard")

    }

    return (
        <div style={{"width": "100%"}} className="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center justify-content-center c-cafe-deets position-relative">
                <button className="c-button-noline" onClick={() => {
                    navigate("/dashboard")
                }}><i className="fa-solid fa-xmark p-4 position-absolute top-0 end-0"/></button>
                <h4 className="c-large-medium">Edit Cafe Details</h4>
                <h3 className="c-small-normal mb-3">{cafe.name}</h3>
                <form action=""
                      onSubmit={(e) => updateCurrentCafe(e)}
                      className="c-form d-flex flex-column align-items-center justify-content-evenly">
                    <input type="text"
                           id="chairs"
                           className="c-input mb-2"
                           placeholder="Chairs"
                           ref={chairs}
                    />
                    <input type="text"
                           id="tables"
                           className="c-input mb-2"
                           placeholder="Tables"
                           ref={tables}
                    />
                    <input type="text"
                           id="capacity"
                           className="c-input mb-2"
                           placeholder="Capacity"
                           ref={capacity}
                    />

                    <button type="submit"
                            className="c-button c-medium-medium mt-3"
                            onClick={(e) => updateCurrentCafe(e)}
                    >Save
                    </button>

                </form>
            </div>
        </div>
    );
}

export default CafeDetails;