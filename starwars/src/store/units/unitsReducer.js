import {INIT_UNITS} from "./actionsTypes";

const initialState = [];
export default function unitsReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_UNITS : {
            return action.payload;
        }
        default :
            return state
    }
}
