import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";
import store from "../../store";
import { isLoadingFetch, notLoadingFetch } from "../user/userSlice";
import { useSelector } from "react-redux";
import Loader from "../../ui/Loader";
function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  const isLoadingFetch = useSelector((state) => state.user.isLoadingFetch);
  console.log(isLoadingFetch);

  return (
    <>
      {isLoadingFetch ? (
        <Loader />
      ) : (
        <fetcher.Form method="PATCH">
          <div className="w-full">
            <button className="redShadow m-auto block text-sm font-semibold text-red-600 transition-all duration-[120ms] hover:text-red-400 active:translate-y-1.5">
              Make Priority
            </button>
          </div>
        </fetcher.Form>
      )}
    </>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  store.dispatch(isLoadingFetch());
  await updateOrder(params.orderId, data);
  store.dispatch(notLoadingFetch());
  return null;
}
