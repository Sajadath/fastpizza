import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem.jsx";
import UpdateItemQuantity from "./UpdateItemQuantity.jsx";
import { getCurrentQuantityById } from "./cartSlice.js";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <li className="py-2 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-10">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="self-end text-sm font-semibold sm:self-center">
          {formatCurrency(totalPrice)}
        </p>
        <UpdateItemQuantity currentQuantity={currentQuantity} pizzaId={pizzaId}>
          {" "}
        </UpdateItemQuantity>
        <DeleteItem pizzaId={pizzaId}></DeleteItem>
      </div>
    </li>
  );
}

export default CartItem;
