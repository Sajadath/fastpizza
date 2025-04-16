import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const currentUsername = useSelector((store) => store.user.username);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <LinkButton
        className="text-sm text-blue-500 hover:text-blue-700"
        to="/menu"
      >
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold">
        Your cart, {currentUsername}
      </h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((ce) => (
          <CartItem item={ce} key={ce.pizzaId}></CartItem>
        ))}
      </ul>

      <div className="mt-6 space-x-3">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
