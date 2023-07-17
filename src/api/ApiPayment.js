import axios from "axios";

const ApiPayment = axios.create({
  // set endpoint api
  baseURL: `https://6a1a-103-156-165-0.ngrok-free.app/api/payment`,

  // set header axios
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
});

export default ApiPayment;
