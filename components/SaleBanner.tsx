import { getActivateSaleByCouponCode } from "@/sanity/lib/sales/getActivateSaleByCouponCode";
import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";

async function SaleBanner() {
  const sale = await getActivateSaleByCouponCode(COUPON_CODES.BFRIDAY);

  if (!sale?.isActive) return null;

  return (
    <div className="bg-black text-white">
      <h1>SaleBanner</h1>
    </div>
  );
}

export default SaleBanner;
