import axios from "axios";

export default axios.create({
  baseURL:
    "http://api.weatherapi.com/v1/forecast.json?key=c8c5aee2a1c642b69d1153808232209",
});

const controller = new AbortController();

export { controller };
