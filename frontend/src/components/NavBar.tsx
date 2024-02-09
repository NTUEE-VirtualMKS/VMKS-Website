import { Link,useNavigate } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
import { HelpCircle } from 'lucide-react';
import { User } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
// import Button from "@mui/material/Button";
export const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full md:w-[1261px] h-[50px] left-0 md:left-[127px] top-[25px] absolute">
        <div className="w-full md:w-[418px] h-[50px] left-0 md:left-[843px] top-0 absolute justify-start items-start gap-[15px] inline-flex">
            <div className="w-[104px] h-[50px] relative">
                <button className="flex flex-col justify-center items-center w-[104px] h-[50px] left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-[40px] border border-white">
                    <div className="flex flex-col justify-center items-center w-[38px] h-[23px] left-[34px] top-[13px] absolute text-white text-sm font-medium font-['Inter'] uppercase leading-[16.96px] tracking-wide" onClick={() => navigate("MapPage")}>map</div>
                </button>
            </div>
            <div className="w-[104px] h-[50px] relative">
                <button className=" flex flex-col justify-center items-center w-[104px] h-[50px] left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-[40px] border border-white">
                    <div className="flex flex-col justify-center items-center w-[38px] h-[23px] left-[34px] top-[13px] absolute text-white text-sm font-medium font-['Inter'] uppercase leading-[16.96px] tracking-wide" onClick={() => navigate("/advanced/forum")}>Forum</div>
                </button>
            </div>
            <div className="w-[50px] h-[50px] relative">
                <button className="flex flex-col justify-center items-center w-[50px] h-[50px] left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-full border border-white" >
                    <ShoppingCart color="#FFFFFF"/>
                </button>
            </div>
            <div className="w-[50px] h-[50px] relative">
                <button className=" flex flex-col justify-center items-center  w-[50px] h-[50px] left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-full border border-white">
                    <User color="#FFFFFF"/>
                </button>
                {/* <div className="w-11 h-11 left-[3px] top-[1px] absolute" /> */}
            </div>
            <div className="w-[50px] h-[50px] relative">
                <button className="flex flex-col justify-center items-center  w-[50px] h-[50px] left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-full border border-white">
                    <HelpCircle color="#FFFFFF"/>
                </button>
            </div>
        </div>

        {/* <div className="w-[45px] h-[45px] left-[55px] top-[2px] absolute">
            <div className="w-9 h-9 left-[4.50px] top-[4.50px] absolute" />
        </div>
         */}
        <div className="w-[45px] h-[45px] left-0 top-[2px] absolute">
        {/* <div className="w-9 h-9 py-[9px] justify-center items-center inline-flex" /> */}
            <button className="flex flex-col justify-center items-center w-[45px] h-[45px] left-0 top-0 absolute bg-zinc-900 rounded-full border border-white" >
                <ChevronLeft color="#FFFFFF"/>
            </button>
            {/* <button className="flex flex-col justify-center items-center w-[45px] h-[45px] left-0 top-0 absolute bg-zinc-900 rounded-full border border-white" > */}
                {/* <ChevronRight color="#FFFFFF"/>
            </button> */}
            <button className="flex flex-col justify-center items-center w-[45px] h-[45px] top-0 absolute bg-zinc-900 rounded-full border border-white left-[60px] absolute" >
                <ChevronRight color="#FFFFFF"/>
            </button>
        </div>
    </div>
    );
}