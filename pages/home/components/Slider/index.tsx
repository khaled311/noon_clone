import React from "react";
import Slider from "../../../../common/components/Slider";
import { routes } from "../../../../utils/apiRoutes";
import useFetcher from "../../../../utils/fetcher";

const HomeSlider = () => {
  const { data, isLoading, error } = useFetcher(
    "homeSlider",
    routes.home.slider,
    "homeSlider"
  );

  return (
    <div className="container">
      <Slider data={data} />
    </div>
  );
};

export default HomeSlider;
