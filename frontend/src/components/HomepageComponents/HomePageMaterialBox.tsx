// TODO: link to material and tool page separately
import { useNavigate } from "react-router-dom";
import Searchbar from "@/components/Searchbar";

function HomePageMaterialBox() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col pr-14 pl-5 mt-5 max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-1 justify-between items-center max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto self-stretch text-5xl font-semibold leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px] bg-gradient-to-r from-[#e6ecee] via-[#00c3ffe8] to-[#0055ff] text-transparent bg-clip-text ">
          Borrow with Ease
          <br />
          Return with Joy !
        </div>
        <div className="flex flex-row gap-3">
          <Searchbar />
          <button className="transform active:scale-90 transition-transform duration-200">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&"
              className="w-10"
            />
          </button>
        </div>
      </div>
      <button onClick={() => navigate("MaterialAndToolPage")}>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95c2a9e5eaa0fd308d6b3e00a72fcd11a72cd14033329882f891cd17813655b3?apiKey=15bded22c0614ce289c46521633cb381&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95c2a9e5eaa0fd308d6b3e00a72fcd11a72cd14033329882f891cd17813655b3?apiKey=15bded22c0614ce289c46521633cb381&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95c2a9e5eaa0fd308d6b3e00a72fcd11a72cd14033329882f891cd17813655b3?apiKey=15bded22c0614ce289c46521633cb381&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95c2a9e5eaa0fd308d6b3e00a72fcd11a72cd14033329882f891cd17813655b3?apiKey=15bded22c0614ce289c46521633cb381&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/95c2a9e5eaa0fd308d6b3e00a72fcd11a72cd14033329882f891cd17813655b3?apiKey=15bded22c0614ce289c46521633cb381&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95c2a9e5eaa0fd308d6b3e00a72fcd11a72cd14033329882f891cd17813655b3?apiKey=15bded22c0614ce289c46521633cb381&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95c2a9e5eaa0fd308d6b3e00a72fcd11a72cd14033329882f891cd17813655b3?apiKey=15bded22c0614ce289c46521633cb381&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95c2a9e5eaa0fd308d6b3e00a72fcd11a72cd14033329882f891cd17813655b3?apiKey=15bded22c0614ce289c46521633cb381&"
          className="mt-9 w-full aspect-[2.22] max-md:max-w-full"
        />
      </button>
    </div>
  );
}

export default HomePageMaterialBox;
