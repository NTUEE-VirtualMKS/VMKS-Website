// import Button from "@mui/material/Button";
import "./HomePage.css";
import "../images/MKS_environment.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Introduction } from "../components/Introduction";
import ImageURL from "../images/MKS_environment.jpg";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
export const HomePage = () => {
  const navigate = useNavigate();
  // const navigate = useNavigate();

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const scheduleData = [
    [
      "9:00-12:00",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
    ],
    [
      "13:00-16:00 (A)",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
    ],
    [
      "13:00-16:00 (B)",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
    ],
    [
      "18:00-21:00",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
      "Brian",
    ],
  ];

  return (
    <>
   
    {/* <div className="w-[1512px] h-[982px] relative bg-gradient-to-tl from-slate-900 to-black"> */}
    {/* <div className="relative bg-gradient-to-tl from-slate-900 to-black"> */}
    {/* <div className="relative bg-gradient-to-tl from-slate-900 to-black md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
        <SideBar />
        <NavBar />
        
        {/* <SideBar /> 
    </div> */}
    <div className="flex flex-col h-screen w-full  overflow-y-scroll scroll-smooth">
      <div className="md:w-[768px] lg:w-[1024px] xl:w-[1280px] mx-auto">
        {/* <SideBar /> */}
        <NavBar />

      </div>
    </div>

    </>
  );
};

