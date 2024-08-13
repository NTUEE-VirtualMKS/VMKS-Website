// TODO: add filter for searchbar
import { useNavigate } from "react-router-dom";
import Searchbar from "@/components/Searchbar";
import { Atom, Bot, Cpu, Hammer } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useWindow } from "@/contexts/WindowContext";
import { useState } from "react";
import FilterButton from "../FilterButton";

function HomePageMaterialBox() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { windowWidth } = useWindow();
  const [type, setType] = useState("material");

  return (
    <div className="flex flex-col mt-5 w-full mb-2">
      {windowWidth > 1023 && (
        <div className="flex gap-1 justify-center xs:justify-center sm:justify-center md:justify-evenly lg:justify-evenly xl:justify-evenly items-center flex-wrap w-full mb-3">
          <div className="text-4xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold dark:text-white">
            Virtual Makerspace
          </div>
          <div className="flex flex-row gap-3 flex-center">
            <Searchbar
              route={type === "material" ? "MaterialPage" : "ToolPage"}
              placeholder={
                type === "material" ? t("searchMaterial") : t("searchTool")
              }
            />
            <FilterButton type={type} setType={setType} />
          </div>
        </div>
      )}
      <div className="flex flex-wrap rounded-[30px] mt-2 border dark:border-[#444444] dark:bg-[#202020] shadow-md">
        <div className="w-1/2 h-32 sm:h-32 md:h-36 lg:h-40 xl:h-40">
          <button
            className="w-full h-full"
            onClick={() => navigate("/DisposableMaterialPage")}
          >
            <div className="flex flex-row items-center justify-center p-4 dark:bg-[#303030] dark:bg-opacity-15 dark:hover:bg-opacity-80 dark:text-white rounded-tl-[30px] h-full dark:border-[#444444] text-xl sm:text-xl md:text-2xl bg:text-3xl xl:text-3xl font-semibold gap-2 hover:bg-gray-200 hover:bg-opacity-60">
              {windowWidth > 659 && <Atom className="dark:text-white" />}
              {t("disposableMaterial")}
            </div>
          </button>
        </div>
        <div className="w-1/2 h-32 sm:h-32 md:h-36 lg:h-40 xl:h-40">
          <button
            className="w-full h-full"
            onClick={() => navigate("/MaterialPage")}
          >
            <div className="flex flex-row items-center justify-center p-4 dark:bg-[#303030] dark:bg-opacity-15 dark:hover:bg-opacity-80 dark:text-white rounded-tr-[30px] h-full border-l dark:border-[#444444] text-xl sm:text-xl md:text-2xl bg:text-3xl xl:text-3xl font-semibold gap-2 hover:bg-gray-200 hover:bg-opacity-60">
              {windowWidth > 659 && <Cpu className="dark:text-white)" />}
              {t("material")}
            </div>
          </button>
        </div>
        <div className="w-1/2 h-32 sm:h-32 md:h-36 lg:h-40 xl:h-40">
          <button
            className="w-full h-full"
            onClick={() => navigate("/ToolPage")}
          >
            <div className="flex flex-row items-center justify-center p-4 dark:bg-[#303030] dark:bg-opacity-15 dark:hover:bg-opacity-80 dark:text-white rounded-bl-[30px] h-full border-t dark:border-[#444444] text-xl sm:text-xl md:text-2xl bg:text-3xl xl:text-3xl font-semibold gap-2 hover:bg-gray-200 hover:bg-opacity-60">
              {windowWidth > 659 && <Hammer className="dark:text-white" />}
              {t("tool")}
            </div>
          </button>
        </div>
        <div className="w-1/2 h-32 sm:h-32 md:h-36 lg:h-40 xl:h-40">
          <button
            className="w-full h-full"
            onClick={() => navigate("/MachinePage")}
          >
            <div className="flex flex-row items-center justify-center p-4 dark:bg-[#303030] dark:bg-opacity-15 dark:hover:bg-opacity-80 dark:text-white rounded-br-[30px] h-full border-l border-t dark:border-[#444444] text-xl sm:text-xl md:text-2xl bg:text-3xl xl:text-3xl font-semibold gap-2 hover:bg-gray-200 hover:bg-opacity-60">
              {windowWidth > 659 && <Bot className="dark:text-white" />}
              {t("machine")}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePageMaterialBox;
