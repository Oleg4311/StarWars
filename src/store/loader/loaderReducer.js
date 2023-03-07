import {INIT_LOADING} from "./actionsTypes";

const initialState = false;

export default function loaderReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_LOADING : {
            return action.payload;
        }
        default :
            return state
    }
}
