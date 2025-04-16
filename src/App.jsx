import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { action as updateOrderAction } from "./features/order/UpdateOrder";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order, { loader as orderLoader } from "./features/order/Order";

import AppLayOut from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      {
        element: <AppLayOut />,
      },
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/menu",
        element: <Menu></Menu>,
        errorElement: <Error />,
        loader: menuLoader,
      },

      { path: "/cart", element: <Cart /> },

      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },

      {
        path: "/order/:orderId",
        element: <Order />,
        action: updateOrderAction,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
