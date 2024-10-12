import React, { useContext } from "react";
import { OutsideContext } from "../context/OutsideContext";

const SongItem2=({name,image,desc,id})=>{

    const {playWithId1} = useContext(OutsideContext)

    return(
        <div onClick={ ()=>playWithId1(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img className="rounded" src={image} alt="" />
            <p className="font-bold mt-2 mb-1 ">{name}</p>
            <p className="text-slate-200 text-sm">{desc}</p>
        </div>
    )
}
export default SongItem2