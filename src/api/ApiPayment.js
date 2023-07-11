import axios from "axios";

const ApiPayment = axios.create({
  // set endpoint api
  baseURL: `http://127.0.0.1:8000/api/payment`,

  // set header axios
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
});

export default ApiPayment;
