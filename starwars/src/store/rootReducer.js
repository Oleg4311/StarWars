import {combineReducers} from 'redux';
import loaderReducer from './loader/loaderReducer';
import unitsReducer from "./units/unitsReducer";

export default combineReducers({
    units: unitsReducer,
    loader: loaderReducer
});
