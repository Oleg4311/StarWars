import {INIT_UNITS} from "./actionsTypes";
import {INIT_LOADING} from "../loader/actionsTypes";

export const initUnitsAC = (e = 1) => async (dispatch) => {
    try {
        dispatch({type: INIT_LOADING, payload: true});
        const response = await fetch(`https://swapi.dev/apgfnyni/people/?page=${e}`);
        const units = await response.json();
        dispatch({type: INIT_UNITS, payload: units}); 
        dispatch({type: INIT_LOADING, payload: false});       
    } catch (error) {
        console.log(error);
        dispatch({type: INIT_LOADING, payload: false});
    }

};

