import { Input } from "./ui/input";
import { useEffect } from "react";
import { Search, X } from "lucide-react";
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
    <div className="relative block w-full">
      <Input
        className="input-class py-6 pl-12 focus-visible:ring-offset-sky-300"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearchParams({ search: e.target.value })}
        onLoad={() => setSearchParams({ search: "" })}
      />
      <Search size={20} className="absolute left-4 top-3.5 text-white" />
      {search && (
        <X
          size={50}
          strokeWidth={1}
          className="absolute right-2 top-0 text-white hover:bg-zinc-500 hover:bg-opacity-50 cursor-pointer rounded-full p-1.5"
          onClick={() => setSearchParams({ search: "" })}
        />
      )}
    </div>
  );
}

export default Searchbar;
