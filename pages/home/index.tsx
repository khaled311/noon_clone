import ProductCard from "../../common/components/ProductCard";
import Spinner from "../../common/components/Spinner";
import { routes } from "../../utils/apiRoutes";
import useFetcher from "../../utils/fetcher";
import Categories from "./components/Categories";
import HomeSlider from "./components/Slider";

const Home = () => {
  // const { data, isLoading, error } = useFetcher(
  //   "products",
  //   routes.products.allProducts,
  //   "products"
  // );

  // if (isLoading || error) return <Spinner />;
  return (
    <div className="px-4">
      <HomeSlider />
      <Categories />
      {/* {data?.map((item: { id: number | null | undefined }) => (
          <ProductCard key={item.id} data={item} />
        ))} */}
    </div>
  );
};

export default Home;
