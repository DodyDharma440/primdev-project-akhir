import { apiMeal } from "@/common/api";
import { ICategory } from "../interfaces";

export const getCategories = () => {
  return apiMeal.get<{ categories: ICategory[] }>("/categories.php");
};
