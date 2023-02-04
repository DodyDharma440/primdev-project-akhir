import axios from "axios";

export const apiMeal = axios.create({
  baseURL: `${process.env.apiUrl}`,
});
