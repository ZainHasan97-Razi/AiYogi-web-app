import { useState } from "react";

export const SearchComponent = ({setSearch, onclick}) => {


    const onSearch = (searchValue) => {
        setSearch(searchValue);
    }


    return (
        <div className="relative h-screen flex items-center justify-center">
            <div className="relative bg-black/80 p-6 rounded-2xl flex items-center space-x-4 w-full max-w-xl">
                <input onChange={(e)=> onSearch(e.target.value)} type="text" placeholder="Type Here" className="flex-1 bg-transparent text-white outline-none placeholder-gray-400"/>
                <button onClick={()=> onclick()} className="bg-white text-black py-2 px-4 rounded-full">Find Answers →</button>
            </div>
        </div>
    )
}