import { RED_BG } from "@/app/constants/colors";
import { useState, useEffect } from "react";

export default function Schedules({ schedules }) {
    // if (!schedules || schedules.length === 0) {
    //     return <p>No schedules available.</p>;
    // }
    const [selected, setSelected] = useState()
    useEffect(()=>{
        console.log(schedules, "here are the schedules")
    },[schedules])

    useEffect(()=>{
        console.log("Selected schedule ", selected)
    },[selected])

    return (
        <div className="">
            <table className="table-auto w-full">
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
                        <tr onClick={()=>{setSelected(item.schedule_id)}} key={index} className={`hover:${RED_BG} hover:text-white ${selected==item.schedule_id? `${RED_BG} text-white`:""}`}>
                            <td className="text-center">{index+1}</td>
                            <td className="text-center">{item.bus_number}</td>
                            <td className="text-center">{item.bus_type}</td>
                            <td className="text-center">{item.departure_time}</td>
                            <td className="text-center">{item.arrival_time}</td>
                            <td className="text-center">{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className={`${RED_BG} text-white`}>Choose schedule</button>
        </div>
    );
}
