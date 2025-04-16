import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();

  const currentquantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentquantity > 0;
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className={`flex gap-4 py-2 ${soldOut ? "cursor-not-allowed" : ""}`}>
      <img
        className={`h-24 ${soldOut ? "cursor-not opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col">
        <p className="font-semibold">{name}</p>
        <p className="text-sm capitalize italic">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="self-end text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="self-end bg-red-100 text-sm font-medium uppercase text-red-500/70">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentquantity}
              />
              <DeleteItem pizzaId={id}> </DeleteItem>
            </div>
          )}
          {!isInCart && (
            <Button onClick={handleAddToCart} disabled={soldOut} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
