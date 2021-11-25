import axios from "axios";
export const api = axios.create({
  baseURL: `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`,
});

export const api_google_geo = axios.create({
  baseURL: `https://maps.googleapis.com/maps/api/geocode/json`,
});
