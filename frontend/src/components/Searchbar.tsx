import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useDebounce } from "@/lib/useDebounce";
import { useLocation, useNavigate } from "react-router-dom";

function Searchbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const debounceValue = useDebounce(search, 500);

  useEffect(() => {
    if (debounceValue) {
      navigate(`/MaterialPage?search=${debounceValue}`);
    } else if (!debounceValue && pathname === "/MaterialPage") {
      navigate("/MaterialPage");
    }
  }, [navigate, pathname, debounceValue]);

  return (
    <div className="relative block">
      <Input
        className="input-class py-6 pl-12 focus-visible:ring-offset-blue-600"
        placeholder="Search materials"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onLoad={() => setSearch("")}
      />
      <Search size={20} className="absolute left-4 top-3.5 text-white" />
    </div>
  );
}

export default Searchbar;
