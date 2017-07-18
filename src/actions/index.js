import axios from 'axios';

export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
export const FETCH_LOCATION = 'FETCHLOCATION';

axios.defaults.headers.post['Content-Type'] = 'application/graphql';
const ROOT_URL = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

export function fetchLocations() {
  const request = axios.post(`${ROOT_URL}`, "{ bikeRentalStations { name stationId } }");

  return {
    type: FETCH_LOCATIONS,
    payload: request
  }
}

export function fetchLocation(value) {
  const request = axios.post(`${ROOT_URL}`, `{ bikeRentalStation(id:\"${value}\") { stationId name bikesAvailable spacesAvailable lat lon allowDropoff } }`);

  return {
    type: FETCH_LOCATION,
    payload: request
  }
}
