import { useRouteError } from "react-router-dom";
export default function Error() {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-6xl  font-bold">Oops!</h1>
      <p className="text-2xl my-3 font-semibold">Sorry, unexpected error</p>
      <p className="text-2xl font-semibold">
        Page are {error.statusText || error.message}
      </p>
    </div>
  );
}
