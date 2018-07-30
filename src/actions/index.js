import axios from 'axios';

const API_KEY = 'aa6bc476907c4ec2b7a39042ce202662';
const ROOT_URL =`https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(id){
  const url = `${ROOT_URL}&id=${id}`;
  // Will return a promise
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

//4887398