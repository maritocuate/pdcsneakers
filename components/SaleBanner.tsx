import { getActivateSaleByCouponCode } from "@/sanity/lib/sales/getActivateSaleByCouponCode";
import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";

async function SaleBanner() {
  const sale = await getActivateSaleByCouponCode(COUPON_CODES.BFRIDAY);

  if (!sale?.isActive) return null;

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white p-7 m-2 rounded-md flex justify-center items-center">
      <div className="container flex justify-between items-center sm:flex-row flex-col sm:gap-0 gap-4">
        <div className="sm:text-left text-center">
          <h2 className="text-2xl font-extrabold">{sale.title}</h2>
          <p className="text-sm font-bold">{sale.description}</p>
        </div>

        <div className="flex">
          <div className="flex bg-white text-black p-3 rounded-full">
            <span className="text-xs font-bold">
              Use code: <span className="text-red-600">{sale.couponCode}</span>{" "}
              for {sale.discountAmount}% OFF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaleBanner;
