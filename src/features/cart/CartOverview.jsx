import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { useEffect, useState } from "react";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const [unMountStyle, setUnMountStyle] = useState(() => {
    if (totalCartPrice) return false;
    if (!totalCartPrice) return true;
  });

  const [unMount, setUnMount] = useState(() => {
    if (totalCartPrice) return false;
    if (!totalCartPrice) return true;
  });
  useEffect(() => {
    if (totalCartPrice) {
      setUnMount(false);
      setUnMountStyle(false);
    }
    if (!totalCartPrice) setUnMountStyle(true);
    const timer = setTimeout(() => {
      if (!totalCartPrice) {
        setUnMount(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [totalCartPrice]);

  if (unMount) return null;

  return (
    <div
      className={` ${unMountStyle ? "hideFooter" : "footer"} flex items-center justify-between overflow-hidden bg-slate-800 px-4 py-4 text-zinc-100 sm:px-6`}
    >
      <p className="space-x-7 font-semibold uppercase sm:space-x-6">
        <span>--</span>
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link className="text-white" to="/cart">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
