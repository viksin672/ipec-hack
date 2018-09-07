import { LOAD_GEOLOCATION } from "../actionTypes";

const initialState = {
  geolaction:false
  
};

const geolocation = (state = initialState , action) => {
  switch (action.type) {
    case LOAD_GEOLOCATION:
      return { ...action.getGeoLocation, geolocation: true };
      default:
      return state;
  }
};

export default geolocation;