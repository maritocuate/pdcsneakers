import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductsByName = async (name: string) => {
  const PRODUCT_SEARCH_QUERY = defineQuery(`
    *[_type == "productTypes"
    && name match $name
    ] | order(name asc)
  `);

  try {
    const products = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: { name },
    });

    return products.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
