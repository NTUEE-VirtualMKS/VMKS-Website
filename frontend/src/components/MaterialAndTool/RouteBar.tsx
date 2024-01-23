// import React from "react";
import { Link } from "react-router-dom";

type RouteBarProps = {
  Route: undefined | string;
};

export const RouteBar = (props: RouteBarProps) => {
  console.log(typeof props.Route);
  if (typeof props.Route !== "string")
    return (
      <nav>
        <Link to="/">Home</Link>
      </nav>
    );
  const routes: string[] = [];
  let tmpRoute = "";
  for (let index = 0; index < props.Route.length; index++) {
    if (props.Route[index] === ",") {
      routes.push(tmpRoute);
      console.log(tmpRoute);
      tmpRoute = "";
      continue;
    }
    tmpRoute = tmpRoute.concat(props.Route[index]);
  }
  console.log(routes);
  return (
    <nav>
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
