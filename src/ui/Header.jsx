import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex flex-col items-center justify-around gap-2 border-b-2 border-sky-300 bg-slate-800 px-4 py-3 uppercase sm:flex-row sm:gap-0 sm:px-6">
      <Link className="tracking-[5px] text-white" to="/">
        Pizza Deliv Co.
      </Link>
      <SearchOrder></SearchOrder>
      <Username></Username>
    </header>
  );
}

export default Header;
