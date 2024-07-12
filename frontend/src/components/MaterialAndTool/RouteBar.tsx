import { Link } from "react-router-dom";

type RouteBarProps = {
  Route: undefined | string;
};

export const RouteBar = (props: RouteBarProps) => {
  if (typeof props.Route !== "string")
    return (
      <nav className="text-2xl m-5">
        <Link to="/">Home</Link>
      </nav>
    );
  const routes: string[] = [];
  let tmpRoute = "";
  for (let index = 0; index < props.Route.length; index++) {
    if (props.Route[index] === ",") {
      routes.push(tmpRoute);
      tmpRoute = "";
      continue;
    }
    tmpRoute = tmpRoute.concat(props.Route[index]);
  }

  return (
    <nav className="text-2xl m-5">
      <Link to="/">Home</Link>
      {routes.map((route) => {
        return (
          <span key={route}>
            {">  "} <Link to={"/" + route}>{route}</Link>
          </span>
        );
      })}
    </nav>
  );
};
