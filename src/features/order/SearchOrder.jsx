import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  function handeSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handeSubmit}>
      <input
        placeholder="Search order number"
        className="rounded-full bg-slate-700 px-4 py-2 text-sm text-white transition-all duration-700 focus:px-14 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-4 focus:ring-offset-slate-800 sm:px-8 md:px-14 md:focus:px-20"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </form>
  );
}

export default SearchOrder;
