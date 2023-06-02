import axios from "axios";
// import { useStateContext } from "./context/ContextProvider.jsx";

const AxiosClient = axios.create({
  baseURL: `http://127.0.0.1:8000/api/v1`,
});

AxiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

AxiosClient.interceptors.response.use(
  (response) => {
    // delete the console.log
    console.log(response);
    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      localStorage.removeItem("ACCESS_TOKEN");
      // window.location.reload();
    } else if (response.status === 404) {
      //Show not found
    }

    throw error;
  }
);

export default AxiosClient;
