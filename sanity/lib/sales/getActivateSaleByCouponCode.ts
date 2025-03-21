import { defineQuery } from "next-sanity";
import { CouponCode } from "./couponCodes";
import { sanityFetch } from "../live";

export const getActivateSaleByCouponCode = async (couponCode: CouponCode) => {
  const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
        *[_type == "salesType"
        && isActive == true
        && couponCode == $couponCode
        ] | order(validFrom desc) [0]
    `);

  try {
    const activeSale = await sanityFetch({
      query: ACTIVE_SALE_BY_COUPON_QUERY,
      params: {
        couponCode,
      },
    });
    return activeSale ? activeSale.data : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
