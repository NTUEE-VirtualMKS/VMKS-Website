import { Input } from "./ui/input";
import { useEffect } from "react";
import { Search } from "lucide-react";
import { useDebounce } from "@/lib/useDebounce";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function Searchbar({
  route,
  placeholder,
}: {
  route: string;
  placeholder: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const debounceValue = useDebounce(search, 500);

  useEffect(() => {
    if (debounceValue) {
      navigate(`/${route}?search=${debounceValue}`);
    } else if (!debounceValue && pathname === `/${route}`) {
      navigate(`/${route}`);
    }
  }, [navigate, pathname, debounceValue]);

  return (
    <div className="relative block">
      <Input
        className="input-class py-6 pl-12 focus-visible:ring-offset-sky-300"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearchParams({ search: e.target.value })}
        onLoad={() => setSearchParams({ search: "" })}
      />
      <Search size={20} className="absolute left-4 top-3.5 text-white" />
    </div>
  );
}

export default Searchbar;
