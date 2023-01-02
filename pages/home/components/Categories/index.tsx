import Image from "next/image";
import Link from "next/link";
import React from "react";
import Spinner from "../../../../common/components/Spinner";
import { routes } from "../../../../utils/apiRoutes";
import useFetcher from "../../../../utils/fetcher";

const Categories = () => {
  const { data, isLoading, error } = useFetcher(
    "productsCategories",
    routes.home.category,
    "navCategories"
  );

  if (error || isLoading) return <Spinner />;
  return (
    <div className="container">
      <div className="flex gap-4 flex-wrap justify-center my-10">
        {data?.map((item: any) => (
          <Link
            href={`/categories/${item?.name}`}
            className="inline-flex flex-col items-center justify-center hover:-translate-y-1 transition hover:drop-shadow-lg"
            key={item?.id}
          >
            <Image
              src={`${process.env.IMGURL}${item?.image?.url}`}
              width={item?.image?.width}
              height={item?.image?.height}
              alt=""
            />
            <span className="text-sm mt-2">{item?.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
