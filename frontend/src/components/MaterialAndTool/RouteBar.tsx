import { Link } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { RouteBarProps } from "@/shared/type";

function RouteBar({ route }: RouteBarProps) {
  const routes: string[] = route!.split(",");

  return (
    <nav className="mt-10 mb-3 ml-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="text-white text-20 hover:text-sky-300">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {routes.map((route) => {
            return (
              <div key={route} className="flex flex-row">
                <BreadcrumbSeparator className="text-white mt-1.5 mr-1.5 [&>svg]:size-5" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      to={"/" + route}
                      className="text-white text-20 hover:text-sky-300"
                    >
                      {route}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
}

export default RouteBar;
