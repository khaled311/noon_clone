import axios from "axios";
import useSwr from "swr";
import {
  formattedCategories,
  formattedProducts,
  formattedHomeSlider,
} from "./formatters";

const postFixer = (endPoint: string) => {
  const lng = localStorage.getItem("LANG");

  if (lng === "ar") {
    return `${endPoint}?locale=ar&populate=*`;
  }
  return `${endPoint}?populate=*`;
};

const getApiData = async (route: string) => {
  const { data } = await axios.get(`${postFixer(route)}`);

  return data;
};

enum DataTypes {
  navCategories = "navCategories",
  products = "products",
  homeSlider = "homeSlider",
  productsCategories = "productsCategories",
}

const useFetcher = (
  key: string,
  route: string,
  format?: keyof typeof DataTypes
) => {
  const {
    data: apiData,
    isLoading,
    error,
  } = useSwr(key, () => getApiData(route));

  switch (format) {
    case DataTypes.navCategories:
      return { data: formattedCategories(apiData), isLoading, error };
    case DataTypes.products:
      return { data: formattedProducts(apiData), isLoading, error };
    case DataTypes.homeSlider:
      return { data: formattedHomeSlider(apiData), isLoading, error };
  }

  return { data: apiData, isLoading, error };
};

export default useFetcher;
