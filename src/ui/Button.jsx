import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-slate-600  font-semibold uppercase tracking-wide text-violet-50 transition-all duration-500 hover:bg-sky-300 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-400/60 ";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 sd:py-4",
    small: base + "text-xs px-4 py-2 md:px-5 md:py-2.5 text-sm",
    secondary:
      "  inline-block text-stone-500 px-4 py-2 rounded-full font-semibold uppercase tracking-wide  transition-all duration-200 hover:text-stone-800 focus:outline-none outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-400/60 ",
    round: base + " text-xs px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
