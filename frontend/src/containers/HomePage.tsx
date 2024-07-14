// import "./HomePage.css";
// import "../images/MKS_environment.jpg";
import HomePageAnnounce from "@/components/HomepageComponents/HomePageAnnounce";
import HomePageTimetable from "@/components/HomepageComponents/HomePageTimetable";
import HomePageForum from "@/components/HomepageComponents/HomePageForum";
import HomePageMaterialBox from "@/components/HomepageComponents/HomePageMaterialBox";

function HomePage() {
  return (
    <div className="p-8 bg-cover bg-gradient-to-tl from-slate-900 to-black">
      <div className="flex flex-row gap-4">
        <div className="w-3/4">
          <div className="flex flex-row gap-4 ">
            <HomePageAnnounce />
            <HomePageTimetable />
          </div>
          <HomePageMaterialBox />
        </div>
        <div className="w-1/4">
          <HomePageForum />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
