import { FETCH_LOCATIONS, FETCH_LOCATION } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_LOCATIONS:
      // Sort through array and create objects with stationId key
      return _.mapKeys(action.payload.data.data.bikeRentalStations, 'stationId');
    case FETCH_LOCATION:
      return action.payload.data.data.bikeRentalStation
    default:
      return state;
  }
}
