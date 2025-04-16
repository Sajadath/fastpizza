import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div className="h-full content-center px-6 py-4 text-center capitalize">
      <h1 className="customShadow text-xl font-semibold">
        oops Something went wrong!
      </h1>
      <p className="mb-10 mt-10 italic"> {error.data || error.message} </p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
