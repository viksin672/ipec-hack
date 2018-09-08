import { LOAD_GEOLOCATION} from "../actionTypes";
import axios from 'axios'


export const loadShow = geolocation => ({
  type: LOAD_GEOLOCATION,
  geolocation
});


export const getGeoLocation = post => {
     const waypoint0 = post.waypoint0;
    // const w3 = post.waypoint0['Response']['View'][0]['Result'][0]['Location']['DisplayPosition'].Latitude ;
    // const w4 = post.waypoint0['Response']['View'][0]['Result'][0]['Location']['DisplayPosition'].Longitude ;
    // const waypoint0 = w3 + "," +w4;
    console.log(post);
    const w1 = post.waypoint1['Response']['View'][0]['Result'][0]['Location']['DisplayPosition'].Latitude ;
    const w2 = post.waypoint1['Response']['View'][0]['Result'][0]['Location']['DisplayPosition'].Longitude ;
    const waypoint1 = w1 + "," +w2;
    console.log(waypoint1);
     return dispatch => {
      return axios.get(`https://route.api.here.com/routing/7.2/calculateroute.json?waypoint0=${waypoint0}&waypoint1=${waypoint1}&mode=fastest%3Bcar%3Btraffic%3Aenabled&app_id=MpC8xRqN60004gk925Zj&app_code=zsp6J7jTDfG-1inCXCUcTg&departure=now`)
        .then(res => {
          dispatch(loadShow(res));
        })
        
    };
  };

  