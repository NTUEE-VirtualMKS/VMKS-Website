
export const SideBar = () => {
    return(
        <>
        <div className="w-[231px] left-[1151px] top-[929px] absolute text-white text-opacity-70 text-sm font-normal font-['Poppins'] leading-tight">copyright © virtual makerspace️</div> 
            <div className="w-[85px] h-[982px] left-0 top-0 absolute bg-slate-900 rounded-2xl border border-zinc-600">
            <img className="w-[92px] h-[107px] left-0 top-0 absolute" src="https://via.placeholder.com/92x107" />
            <div className="w-[85px] h-px left-0 top-[109px] absolute bg-zinc-600" />
            <div className="pl-[20.12px] pr-[21.12px] pt-[18px] left-0 top-[113px] absolute justify-center items-center inline-flex">
                <div className="self-stretch px-3 py-2.5 rounded-lg justify-start items-center gap-2.5 inline-flex" />
            </div>
            <div className="pl-[13px] pr-3 pt-2.5 pb-[364px] left-0 top-[174px] absolute flex-col justify-start items-start gap-5 inline-flex">
                <div className="text-neutral-500 text-[10px] font-medium font-['Inter'] uppercase leading-3 tracking-wide">Favorites</div>
                <div className="self-stretch flex-col justify-start items-start gap-5 inline-flex">
                    <img className="w-[60px] h-[60px]" src="https://via.placeholder.com/60x60" />
                    <img className="w-[60px] h-[60px]" src="https://via.placeholder.com/60x60" />
                    <img className="w-[60px] h-[60px]" src="https://via.placeholder.com/60x60" />
                </div>
            </div>
            <div className="w-[85px] h-px left-0 top-[897px] absolute bg-zinc-600" />
            <div className="h-[88px] px-6 py-[26px] left-0 top-[898px] absolute bg-gray-800 rounded-bl-2xl rounded-br-2xl flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[52px] h-9 relative">
                    <div className="w-[52px] h-8 left-0 top-[2px] absolute bg-gray-900 rounded-2xl" />
                    <div className="w-7 h-7 left-[22px] top-[4px] absolute bg-zinc-600 rounded-full shadow" />
                </div>
            </div>
            <div className="p-1.5 left-[71px] top-[59px] absolute bg-gray-900 rounded-lg border border-zinc-600 justify-start items-start gap-2 inline-flex">
                <div className="w-4 h-4 relative" />
            </div>
        </div> 
        </>
    );
}