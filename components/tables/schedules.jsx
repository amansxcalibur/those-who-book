import { RED_BG } from "@/app/constants/colors";
import { useState, useEffect } from "react";

export default function Schedules({ schedules, selected, setSelected }) {
    // if (!schedules || schedules.length === 0) {
    //     return <p>No schedules available.</p>;
    // }
    useEffect(()=>{
        console.log(schedules, "here are the schedules")
    },[schedules])

    useEffect(()=>{
        console.log("Selected schedule ", selected)
    },[selected])

    return (
        <div className="">
            <p className="text-[50px] text-center">AVAILABLE BUSES</p>
            <table className="table-auto w-full mb-2">
                <thead>
                    <tr>
                        <th></th>
                        <th>Bus Number</th>
                        <th>Type</th>
                        <th>Departure</th>
                        <th>Arrival</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((item, index) => (
                        <tr onClick={()=>{setSelected(item.schedule_id)}} key={index} className={`border-b-2 hover:${RED_BG} hover:text-white ${selected==item.schedule_id? `${RED_BG} text-white`:""}`}>
                            <td className="text-center py-3">{index+1}</td>
                            <td className="text-center py-3">{item.bus_number}</td>
                            <td className="text-center py-3">{item.bus_type}</td>
                            <td className="text-center py-3">{item.departure_time}</td>
                            <td className="text-center py-3">{item.arrival_time}</td>
                            <td className="text-center py-3">&#x20b9;{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className={`${RED_BG} text-white min-h-[50px] p-3`}>Choose schedule</button>
        </div>
    );
}
