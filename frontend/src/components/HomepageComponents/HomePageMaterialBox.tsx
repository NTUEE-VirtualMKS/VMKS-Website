// TODO: link to material and tool page separately
import { useNavigate } from "react-router-dom";
import Searchbar from "@/components/Searchbar";
import { Atom, Bot, Cpu, Hammer } from "lucide-react";

function HomePageMaterialBox() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col pr-14 pl-5 mt-5 max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-1 justify-between items-center max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto self-stretch text-5xl font-semibold leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px] text-white">
          Borrow with Ease
          <br />
          Return with Joy !
        </div>
        <div className="flex flex-row gap-3">
          <Searchbar route="MaterialPage" placeholder="搜尋元件" />
          <button className="transform active:scale-90 transition-transform duration-200">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&"
              className="w-10"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap rounded-[30px] mt-9 border-2 border-[#444444] bg-[#202020]">
        <div className="w-1/2 h-40">
          <button
            className="w-full h-full"
            onClick={() => navigate("/DisposableMaterialPage")}
          >
            <div className="flex items-center justify-center p-4 bg-[#303030] bg-opacity-15 hover:bg-opacity-80 text-white rounded-tl-[30px] h-full border-r border-b border-[#444444] text-3xl font-semibold gap-2">
              <Atom className="text-white" size={28} />
              耗材
            </div>
          </button>
        </div>
        <div className="w-1/2 h-40">
          <button
            className="w-full h-full"
            onClick={() => navigate("/MaterialPage")}
          >
            <div className="flex items-center justify-center p-4 bg-[#303030] bg-opacity-15 hover:bg-opacity-80 text-white rounded-tr-[30px] h-full border-l border-b border-[#444444] text-3xl font-semibold gap-2">
              <Cpu className="text-white" size={28} />
              元件
            </div>
          </button>
        </div>
        <div className="w-1/2 h-40">
          <button
            className="w-full h-full"
            onClick={() => navigate("/ToolPage")}
          >
            <div className="flex items-center justify-center p-4 bg-[#303030] bg-opacity-15 hover:bg-opacity-80 text-white rounded-bl-[30px] h-full border-t border-r border-[#444444] text-3xl font-semibold gap-2">
              <Hammer className="text-white" size={28} />
              工具
            </div>
          </button>
        </div>
        <div className="w-1/2 h-40">
          <button
            className="w-full h-full"
            onClick={() => navigate("/MachinePage")}
          >
            <div className="flex items-center justify-center p-4 bg-[#303030] bg-opacity-15 hover:bg-opacity-80 text-white rounded-br-[30px] h-full border-l border-t border-[#444444] text-3xl font-semibold gap-2">
              <Bot className="text-white" size={28} />
              機台
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePageMaterialBox;
