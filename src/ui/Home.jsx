import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import LinkButton from "./LinkButton";
function Home() {
  const currentUsername = useSelector((store) => store.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold text-slate-800 md:text-3xl">
        The best <span className="font-bold text-yellow-500">pizza.</span>
        <br />
        Straight out of the oven, straight to you.
      </h1>

      {!currentUsername ? (
        <CreateUser />
      ) : (
        <LinkButton to="/menu">Go to menu ! -{">"}</LinkButton>
      )}
    </div>
  );
}

export default Home;
