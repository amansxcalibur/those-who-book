import { RED_BG } from "@/app/constants/colors";
import { useState, useEffect } from "react";
import UserDetails from "../forms/user_details";
import EqualToSeperator from "../ui_elems/equal_to_seperator";

export default function Schedules({ bill, schedules, setSchedules, selected, setSelected }) {
    // if (!schedules || schedules.length === 0) {
    //     return <p>No schedules available.</p>;
    // }
    const [openInput, setOpenInput] = useState(false);
    useEffect(()=>{
        console.log(schedules, "here are the schedules")
    },[schedules])

    useEffect(()=>{
        console.log("Selected schedule ", selected)
    },[selected])

    return (
        <div className={`fixed top-0 max-w-[670px] w-full bg-white h-screen py-[35px]`}>
            <EqualToSeperator/>
            {!openInput?<>
            <p className="text-[50px] text-center">AVAILABLE BUSES</p>
            <EqualToSeperator/>
            <div className="min-h-[77vh] max-h-[77vh] overflow-y-auto">
                <table className="table-auto w-full mb-2">
                    <thead className="sticky top-0 text-white">
                        <tr className={`py-3 ${RED_BG} -mb-4`}>
                            <th className="py-3"></th>
                            <th className="py-3">Bus Number</th>
                            <th>Type</th>
                            <th>Departure</th>
                            <th>Arrival</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td colSpan={6}><EqualToSeperator/></td>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map((item, index) => (
                            <tr onClick={()=>{setSelected(item.schedule_id)}} key={index} className={`text-[20px] border-b-2 hover:${RED_BG} hover:text-white ${selected==item.schedule_id? `${RED_BG} text-white`:""}`}>
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
            </div>
            <EqualToSeperator/>
            <div className="mt-3 flex">
                <button className={`${RED_BG} text-white min-h-[50px] p-3`} onClick={()=>{setSchedules()}}>Cancel</button>
                <div className="flex-1"></div>
                <button disabled={selected?0:1} className={`${RED_BG} text-white min-h-[50px] p-3 ${selected?'':"bg-gray-400 text-gray-200"}`} onClick={()=>{(selected?setOpenInput(true):{})}}>Choose schedule</button>
            </div>
            </>
            :
            <UserDetails bill={bill} selected={selected} setSelected={setSelected} setOpenInput={setOpenInput}/>
        }
        </div>
    );
}
