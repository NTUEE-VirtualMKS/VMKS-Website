import HomePageAnnouncement from "@/components/HomepageComponents/HomePageAnnouncement";
import HomePageSchedule from "@/components/HomepageComponents/HomePageSchedule";
import HomePageForum from "@/components/HomepageComponents/HomePageForum";
import HomePageMaterialBox from "@/components/HomepageComponents/HomePageMaterialBox";
import { useWindow } from "@/contexts/WindowContext";
import Searchbar from "@/components/Searchbar";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { windowWidth } = useWindow();
  const { t } = useTranslation();
  return (
    <div className="p-6 bg-cover bg-gradient-to-tl from-slate-900 to-black">
      <div className="flex flex-col gap-2 sm:gap-2 md:gap-4 lg:gap-4 xl:gap-4 sm:flex-col md:flex-col lg:flex-col xl:flex-row">
        {windowWidth < 767 && (
          <div className="mt-3 flex flex-col w-11/12 mx-auto">
            {windowWidth < 601 && (
              <div className="text-5xl font-bold text-white mb-2">VMKS</div>
            )}
            <div className="flex flex-row gap-3">
              <Searchbar
                route="MaterialPage"
                placeholder={t("searchMaterial")}
              />
              <button className="transform active:scale-90 transition-transform duration-200">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&"
                  className="w-12"
                />
              </button>
            </div>
          </div>
        )}
        <div className="w-full sm:w-full md:w-full lg:w-full xl:w-3/4 ">
          <div className="flex flex-col gap-4 sm:flex-col md:flex-row bg:flex-row xl:flex-row">
            <HomePageAnnouncement />
            <div>
              {windowWidth < 1024 && windowWidth > 767 && (
                <div className="mb-3 flex flex-row sm:flex-row md:flex-col lg:flex-col xl:flex-col gap-2 justify-start">
                  <div className="text-3xl xs:text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-white">
                    Virtual Makerspace
                  </div>
                  <div className="flex flex-row flex-center gap-3">
                    <Searchbar
                      route="MaterialPage"
                      placeholder={t("searchMaterial")}
                    />
                    <button className="transform active:scale-90 transition-transform duration-200">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&"
                        className="w-12"
                      />
                    </button>
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

export default HomePage;
