import { apiMeal } from "@/common/api";
import { IMeal } from "@/modules/meals/interfaces";

export const getMealsByCategory = ({ category }: { category: string }) => {
  return apiMeal.get<{ meals: IMeal[] }>(`/filter.php?c=${category}`);
};

export const getMealsByName = ({ name }: { name: string }) => {
  return apiMeal.get<{ meals: IMeal[] }>(`/search.php?s=${name}`);
};
