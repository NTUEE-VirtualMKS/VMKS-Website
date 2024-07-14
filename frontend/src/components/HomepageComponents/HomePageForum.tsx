import { useNavigate } from "react-router-dom";

function HomePageForum() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full py-5 px-4 w-full border-2 border-blue-600 border-solid rounded-[30px] max-md:pr-5">
      <div className="text-2xl font-semibold text-white">論壇 💬</div>
      <div className="flex gap-5 justify-between mt-6 text-sm font-semibold max-md:mr-2">
        <div className="pr-3.5 pb-2 text-white whitespace-nowrap border border-black border-solid select-none">
          Recently Added 🌟
        </div>
        <button
          className="my-auto text-right text-white text-opacity-50 transform active:scale-90 transition-transform duration-200"
          onClick={() => navigate("/advanced/forum")}
        >
          See all
        </button>
      </div>
      {
        // TODO: create a new component for each forum post and replace with map function.
        <div className="flex flex-col py-0.5 mt-5 mb-96 w-full text-white border border-black border-solid max-md:mb-10 transform active:scale-95 transition-transform duration-200 cursor-pointer">
          <div className="flex gap-5 justify-between w-full font-semibold">
            <div className="flex gap-1 justify-between ">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c58b0c7734d3fe9212bd37aa19061aa238df561d6ac7b97f69873db28f8bdbf9?apiKey=15bded22c0614ce289c46521633cb381&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c58b0c7734d3fe9212bd37aa19061aa238df561d6ac7b97f69873db28f8bdbf9?apiKey=15bded22c0614ce289c46521633cb381&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c58b0c7734d3fe9212bd37aa19061aa238df561d6ac7b97f69873db28f8bdbf9?apiKey=15bded22c0614ce289c46521633cb381&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c58b0c7734d3fe9212bd37aa19061aa238df561d6ac7b97f69873db28f8bdbf9?apiKey=15bded22c0614ce289c46521633cb381&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c58b0c7734d3fe9212bd37aa19061aa238df561d6ac7b97f69873db28f8bdbf9?apiKey=15bded22c0614ce289c46521633cb381&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c58b0c7734d3fe9212bd37aa19061aa238df561d6ac7b97f69873db28f8bdbf9?apiKey=15bded22c0614ce289c46521633cb381&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c58b0c7734d3fe9212bd37aa19061aa238df561d6ac7b97f69873db28f8bdbf9?apiKey=15bded22c0614ce289c46521633cb381&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c58b0c7734d3fe9212bd37aa19061aa238df561d6ac7b97f69873db28f8bdbf9?apiKey=15bded22c0614ce289c46521633cb381&"
                className="self-start aspect-square w-12"
              />
              <div className="flex flex-col flex-1">
                <div className="text-xs">#CS</div>
                <div className="text-sm whitespace-nowrap">
                  Blender with Unreal Engine 5
                </div>
                <div className="mt-1 text-xs text-white">
                  Blend 3D artistry with Unreal Engine 5 for stunning visuals
                  and unparalleled real-time rendering experiences.
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/11d7410b21dd1990dab17784e92b9a019cead074464480e7515c8a1cceb0a99e?apiKey=15bded22c0614ce289c46521633cb381&"
              className="self-start w-4 aspect-square"
            />
          </div>
          <div className="gap-2 mt-2 text-xs flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <div>Chris Hsieh</div>
            {/* <div className="self-start mt-2 font-bold leading-[80%]">.</div> */}
            <div>01/19/2024</div>
          </div>
        </div>
      }
    </div>
  );
}

export default HomePageForum;
