import axios from "axios";

const ApiPayment = axios.create({
  // set endpoint api
  baseURL: `https://8454-182-253-75-243.ngrok-free.app/api/payment`,

  // set header axios
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
});

export default ApiPayment;
