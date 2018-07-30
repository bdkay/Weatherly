import axios from 'axios';

const API_KEY = 'aa6bc476907c4ec2b7a39042ce202662';
const ROOT_URL =`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city}`;
  
  // Axios returns a promise, store it in request
  const request = axios.get(url);
  
  console.log('Request:', request);
  
  return {
    type: FETCH_WEATHER,
    // returning the promise as the payload
    payload: request
  };
}

//4887398