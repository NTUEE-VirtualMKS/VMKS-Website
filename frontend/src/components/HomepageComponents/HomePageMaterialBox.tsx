// TODO: add filter for searchbar
import { useNavigate } from "react-router-dom";
import Searchbar from "@/components/Searchbar";
import { Atom, Bot, Cpu, Hammer } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useWindow } from "@/contexts/WindowContext";
import { useState } from "react";

function HomePageMaterialBox() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { windowWidth } = useWindow();
  const [type, setType] = useState("material");

  return (
    <div className="flex flex-col mt-5 w-full mb-2">
      {windowWidth > 1023 && (
        <div className="flex gap-1 justify-center xs:justify-center sm:justify-center md:justify-evenly lg:justify-evenly xl:justify-evenly items-center flex-wrap w-full mb-3">
          <div className="text-4xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold text-white">
            Virtual Makerspace
          </div>
          <div className="flex flex-row gap-3 flex-center">
            <Searchbar
              route={type === "material" ? "MaterialPage" : "ToolPage"}
              placeholder={
                type === "material" ? t("searchMaterial") : t("searchTool")
              }
            />
            <button
              className="transform active:scale-90 transition-transform duration-200"
              onClick={() => setType(type === "material" ? "tool" : "material")}
            >
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&"
                className="w-12"
              />
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-wrap rounded-[30px] mt-2 border border-[#444444] bg-[#202020]">
        <div className="w-1/2 h-32 sm:h-32 md:h-36 lg:h-40 xl:h-40">
          <button
            className="w-full h-full"
            onClick={() => navigate("/DisposableMaterialPage")}
          >
            <div className="flex flex-row items-center justify-center p-4 bg-[#303030] bg-opacity-15 hover:bg-opacity-80 text-white rounded-tl-[30px] h-full border-[#444444] text-xl sm:text-xl md:text-2xl bg:text-3xl xl:text-3xl font-semibold gap-2">
              {windowWidth > 659 && <Atom className="text-white" />}
              {t("disposableMaterial")}
            </div>
          </button>
        </div>
        <div className="w-1/2 h-32 sm:h-32 md:h-36 lg:h-40 xl:h-40">
          <button
            className="w-full h-full"
            onClick={() => navigate("/MaterialPage")}
          >
            <div className="flex flex-row items-center justify-center p-4 bg-[#303030] bg-opacity-15 hover:bg-opacity-80 text-white rounded-tr-[30px] h-full border-l border-[#444444] text-xl sm:text-xl md:text-2xl bg:text-3xl xl:text-3xl font-semibold gap-2">
              {windowWidth > 659 && <Cpu className="text-white)" />}
              {t("material")}
            </div>
          </button>
        </div>
        <div className="w-1/2 h-32 sm:h-32 md:h-36 lg:h-40 xl:h-40">
          <button
            className="w-full h-full"
            onClick={() => navigate("/ToolPage")}
          >
            <div className="flex flex-row items-center justify-center p-4 bg-[#303030] bg-opacity-15 hover:bg-opacity-80 text-white rounded-bl-[30px] h-full border-t border-[#444444] text-xl sm:text-xl md:text-2xl bg:text-3xl xl:text-3xl font-semibold gap-2">
              {windowWidth > 659 && <Hammer className="text-white" />}
              {t("tool")}
            </div>
          </button>
        </div>
        <div className="w-1/2 h-32 sm:h-32 md:h-36 lg:h-40 xl:h-40">
          <button
            className="w-full h-full"
            onClick={() => navigate("/MachinePage")}
          >
            <div className="flex flex-row items-center justify-center p-4 bg-[#303030] bg-opacity-15 hover:bg-opacity-80 text-white rounded-br-[30px] h-full border-l border-t border-[#444444] text-xl sm:text-xl md:text-2xl bg:text-3xl xl:text-3xl font-semibold gap-2">
              {windowWidth > 659 && <Bot className="text-white" />}
              {t("machine")}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePageMaterialBox;
