import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { delteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  function handleClick() {
    console.log("clicked");

    dispatch(delteItem(pizzaId));
  }
  return (
    <Button type="small" onClick={handleClick}>
      delete
    </Button>
  );
}

export default DeleteItem;
