'use client'

import { RED_BG } from "@/app/constants/colors";
import { useState } from "react"
import Calendar from "react-calendar";

export default function ReserveTicket(){
    const [value, setValue] = useState(new Date());
    return(
        <div className={`${RED_BG} text-white my-[20px] py-[30px]`}>
            <p className="flex justify-center text-[50px] mb-[30px]">RESERVATION</p>
            <form className="flex flex-col items-center gap-y-[30px]">
                <div className="max-w-[350px] text-[17px]">
                    <Calendar onChange={setValue} value={value} />
                </div>
                <div className="w-full flex px-[30px]">
                    <div className="flex-1 flex items-start flex-col">
                        <label htmlFor="start">Start</label>
                        <input type="text" id="start" className="min-h-[50px] min-w-[270px]"/>
                    </div>
                    <div className="flex-1 flex items-end flex-col">
                        <label htmlFor="destination" className="">Destination</label>
                        <input type="text" id="destination" className="min-h-[50px] min-w-[270px]"/>
                    </div>
                </div>
                <div className="flex-1 flex min-w-full px-[30px]">
                    <button className="min-h-[50px] flex-1 bg-red-500">Register</button>
                </div>
            </form>
        </div>
    )
}