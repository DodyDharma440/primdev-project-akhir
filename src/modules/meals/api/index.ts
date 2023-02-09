import { apiMeal } from "@/common/api";
import { IMealDetail } from "../interfaces";

export const getMealById = ({ id }: { id: string }) => {
  return apiMeal.get<{ meals: [IMealDetail] }>(`/lookup.php?i=${id}`);
};
