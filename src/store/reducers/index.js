import { combineReducers } from "redux";
import geolocation from "./getGeoLocation";



const rootReducer = combineReducers({
    geolocation
});

export default rootReducer;