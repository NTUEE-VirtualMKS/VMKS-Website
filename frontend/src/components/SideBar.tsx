import { useNavigate } from "react-router-dom";
import { CirclePlus, Heart } from "lucide-react";

const images = [
  {
    url: "https://http.cat/200",
    alt: "200 OK",
  },
  {
    url: "https://http.cat/400",
    alt: "400 Bad Request",
  },
  {
    url: "https://http.cat/404",
    alt: "404 Not Found",
  },
];

function SideBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-20 h-full left-0 top-0 fixed bg-slate-900 rounded-r-2xl border border-zinc-600 flex flex-col">
        <button onClick={() => navigate("/")}>
          <img
            className="w-full h-28 object-cover"
            src="/logo.png"
            alt="logo"
          />
        </button>
        <div className="h-px bg-zinc-600" />
        <div className="w-full flex flex-col justify-center items-center p-2">
          <Heart className="w-5 h-5 text-white" />
          <div className="flex-wrap px-1 text-white text-xs font-medium font-inter uppercase tracking-wide">
            LIKE
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
          {images.map(({ url, alt }) => (
            <button
              className="w-full flex flex-col justify-center items-center p-1 transform active:scale-90 transition-transform duration-200"
              key={alt}
            >
              <img className="w-full object-cover" src={url} alt={alt} />
            </button>
          ))}
        </div>
        <button className="w-full flex flex-col justify-center items-center p-2 transform active:scale-90 transition-transform duration-200">
          <CirclePlus className="w-5 h-5 text-white" />
          <div className="flex-wrap px-1 text-white text-xs font-medium font-inter uppercase tracking-wide">
            ADD
          </div>
        </button>
      </div>
    </>
  );
}

export default SideBar;
