import { LOAD_GEOLOCATION} from "../actionTypes";
import axios from 'axios'


export const loadShow = geolocation => ({
  type: LOAD_GEOLOCATION,
  geolocation
});


export const getGeoLocation = post => {
    const waypoint0 = post.waypoint0;
    
    const waypoint1 =post.waypoint1;
    console.log(waypoint1['Response']['View']['Result']);
     return dispatch => {
      return axios.get(`https://route.api.here.com/routing/7.2/calculateroute.json?waypoint0=${waypoint0}&waypoint1=${waypoint1}&mode=fastest%3Bcar%3Btraffic%3Aenabled&app_id=MpC8xRqN60004gk925Zj&app_code=zsp6J7jTDfG-1inCXCUcTg&departure=now`)
        .then(res => {
          dispatch(loadShow(res));
        })
        
    };
  };

  