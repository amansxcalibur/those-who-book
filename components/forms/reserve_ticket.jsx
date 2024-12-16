'use client'

import { useState } from "react"
import Calendar from "react-calendar";

export default function ReserveTicket(){
    const [value, setValue] = useState(new Date());
    return(
        <div className="bg-red-600">
            <p className="flex justify-center">RESERVATION</p>
            <form className="flex flex-col items-center">
                <div className="max-w-[400px]">
                    <Calendar onChange={setValue} value={value} />
                </div>
                <div className="bg-green-500 w-full flex px-[30px]">
                    <div className="flex-1 flex justify-start">
                        <input type="text" className="min-h-[50px] min-w-[270px]"/>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <input type="text" className="min-h-[50px] min-w-[270px]"/>
                    </div>
                </div>
                <div className="flex-1 flex min-w-full px-[30px]">
                    <button className="min-h-[50px] flex-1">Register</button>
                </div>
            </form>
        </div>
    )
}