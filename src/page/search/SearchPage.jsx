import React from "react";
import SearchProducts from "../../components/SearchProducts";
import SearchSidebar from "../../components/SearchSidebar";
function SearchPage(){
    return (
       <div className="root_container">
         <div className="mt-[40px] grid grid-cols-4 gap-4">
            <div>
                <SearchSidebar/>
            </div>
            <div className=' col-span-3'>
                <div className="flex  justify-between items-center py-[16px] border-b border-gray-300">
                    <div className="flex items-center gap-2 italic text-[18px]">
                        <span>Kết quả tìm kiếm truyện: </span>
                        <span className=" font-bold">tên truyện</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-gray-400"><span>0</span><span>truyện</span></div>
                </div>
                <SearchProducts/>
            </div>
         </div>
       </div>
    )
}
export default SearchPage