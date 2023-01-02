import { IProduct } from "../common/Types";

export const formattedCategories = (data: any) => {
  const formatted = data?.data?.map((item: any) => ({
    id: item.id,
    name: item.attributes.categoryName,
    image: {
      width: item?.attributes?.image?.data?.attributes.width,
      height: item?.attributes?.image?.data?.attributes.height,
      url: item?.attributes?.image?.data?.attributes.url,
    },
  }));

  return formatted;
};

export const formattedProducts = (data: any) => {
  return data?.data.map((item: IProduct) => ({
    id: item?.id,
    name: item?.attributes?.product_name,
    price: item?.attributes?.price,
    images: item?.attributes?.product_images?.data?.map(
      (item: {
        id: any;
        attributes: { width: any; height: any; url: any };
      }) => ({
        id: item.id,
        width: item?.attributes?.width,
        height: item?.attributes?.height,
        url: item?.attributes?.url,
      })
    ),
    category: item?.attributes?.category?.data?.attributes?.categoryName,
    description: item?.attributes?.description,
  }));
};

export const formattedHomeSlider = (data: any) => {
  const formatted = data?.data?.attributes?.image?.data?.map((item: any) => ({
    id: item?.id,
    width: item?.attributes?.width,
    height: item?.attributes?.height,
    url: item?.attributes?.url,
  }));

  return formatted;
};
