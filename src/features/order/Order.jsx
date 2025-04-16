// Test ID: IIDSAT
import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import UpdateOrder from "./UpdateOrder";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff

  const order = useLoaderData();
  const fetcher = useFetcher();
  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="h-full content-center space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} Status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-sky-200 px-3 py-1 text-sm font-semibold uppercase text-sky-500">
              Priority
            </span>
          )}
          <span className="text-green-400">{status} order</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((ce) => (
          <OrderItem
            item={ce}
            key={ce.id}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher?.data?.find((el) => el.id === ce.pizzaId).ingredients ??
              []
            }
          />
        ))}
      </ul>

      <div className="m-auto flex w-fit flex-wrap gap-8 text-sm">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}

        <p className="bg-sky-200 px-2 font-bold text-sky-500">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order}></UpdateOrder>}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId); // onja to reouter goftim esmesh orderId bashe
  return order;
}
export default Order;
