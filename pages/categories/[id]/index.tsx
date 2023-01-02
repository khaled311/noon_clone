import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Category = () => {
  const router = useRouter();
  const categoryName = router.query?.id;

  return (
    <>
      <Head>
        <title>{categoryName}</title>
      </Head>
      <div>{categoryName}</div>;
    </>
  );
};

export default Category;
