// TODO: implement the sidebar component
import { useNavigate } from "react-router-dom";
import { images } from "@/constants/index";
import { useEffect, useState } from "react";

function SideBar() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number }) => {
      if (event.clientX < 50) {
        setIsVisible(true);
      } else if (event.clientX > 200) {
        setIsVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className={`w-20 fixed top-0 left-0 h-full transform transition-transform duration-300 bg-slate-900 rounded-r-lg ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={() => navigate("/")}>
          <img
            className="w-20 my-1.5 object-cover"
            src="/logo.png"
            alt="logo"
          />
        </button>
        <div className="h-px bg-zinc-600" />
        <div className="w-full flex flex-col justify-center items-center p-2">
          <div className="flex-wrap px-1 text-white text-base font-medium font-inter uppercase tracking-wide">
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
      </div>
    </>
  );
}

export default SideBar;
