import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-slate-300 px-2">
      {menu.map((ce) => (
        <MenuItem pizza={ce} key={ce.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;
