const BASEURL = process.env.BASEURL;
export const routes = {
  products: {
    allProducts: `${BASEURL}products`,
  },
  navbar: {
    categories: `${BASEURL}categories`,
  },
  home: {
    slider: `${BASEURL}home-slider`,
    category: `${BASEURL}categories`,
  },
};
