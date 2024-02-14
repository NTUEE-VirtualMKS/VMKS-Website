import { useNavigate } from "react-router-dom";
export const HomePageMaterialBox = () => {
    const navigate = useNavigate();
    return(
        <div className="flex flex-col pr-14 pl-5 mt-5 max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-1 justify-between items-center max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto self-stretch text-5xl font-semibold text-white leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
                Borrow with Ease
                <br />
                Return with Joy !
                </div>
                <div className="flex flex-col flex-1 justify-center items-start self-stretch py-3 pr-16 pl-6 my-auto text-sm leading-5 text-white whitespace-nowrap rounded-xl backdrop-blur-[40.774227142333984px] bg-[linear-gradient(0deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.10)_100%),linear-gradient(0deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.10)_100%),rgba(255,255,255,0.10)] max-md:px-5">
                <div className="flex gap-2">
                    <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b2cd837fda6f39ecd575c7c175771d696c439d3c515e950245963a0cffe7769?apiKey=15bded22c0614ce289c46521633cb381&"
                    className="self-start aspect-square w-[18px]"
                    />
                    <div className="grow">Search Tools</div>
                </div>
                </div>
                <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b513ff04ae74d7aff913c526a595a5779b717ba56978a19f01e8fac8d6ca19d5?apiKey=15bded22c0614ce289c46521633cb381&"
                className="self-stretch my-auto w-11 aspect-square"
                />
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