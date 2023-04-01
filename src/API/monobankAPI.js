import axios from "axios";
axios.defaults.baseURL = "https://api.monobank.ua/bank";
export const actualRate = async () => {
  try {
    const response = await axios.get(`/currency`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
