import HomePageAnnouncement from "@/components/HomepageComponents/HomePageAnnouncement";
import HomePageSchedule from "@/components/HomepageComponents/HomePageSchedule";
import HomePageForum from "@/components/HomepageComponents/HomePageForum";
import HomePageMaterialBox from "@/components/HomepageComponents/HomePageMaterialBox";
import { useWindow } from "@/contexts/WindowContext";
import Searchbar from "@/components/Searchbar";
import { useTranslation } from "react-i18next";
import FilterButton from "@/components/FilterButton";
import { useState } from "react";

function HomePage() {
  const { windowWidth } = useWindow();
  const { t } = useTranslation();
  const [type, setType] = useState("material");
  return (
    <div className="p-6">
      <div className="flex flex-col gap-2 sm:gap-2 md:gap-4 lg:gap-4 xl:gap-4 sm:flex-col md:flex-col lg:flex-col xl:flex-row">
        {windowWidth < 767 && (
          <div className="mt-3 flex flex-col w-full">
            <div className="flex flex-row gap-3">
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
        <div className="w-full sm:w-full md:w-full lg:w-full xl:w-3/4 ">
          <div className="flex flex-col gap-4 sm:flex-col md:flex-row bg:flex-row xl:flex-row">
            <HomePageAnnouncement />
            <div>
              {windowWidth < 1024 && windowWidth > 767 && (
                <div className="mb-3 flex flex-row sm:flex-row md:flex-col lg:flex-col xl:flex-col gap-2 justify-start">
                  <div className="text-3xl xs:text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-5xl font-bold dark:text-white">
                    Virtual Makerspace
                  </div>
                  <div className="flex flex-row flex-center gap-3">
                    <Searchbar
                      route={type === "material" ? "MaterialPage" : "ToolPage"}
                      placeholder={
                        type === "material"
                          ? t("searchMaterial")
                          : t("searchTool")
                      }
                    />
                    <FilterButton type={type} setType={setType} />
                  </div>
                </div>
              )}
              <HomePageSchedule />
            </div>
          </div>
          <HomePageMaterialBox />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/4 mt-2 sm:mt-2 md:mt-2 lg:mt-0 xl:mt-0">
          <HomePageForum />
        </div>
      </div>
    </div>
  );
}

export { HomePage };
