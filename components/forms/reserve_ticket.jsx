'use client'

import { RED_BG, RED_TEXT } from "@/app/constants/colors";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import Calendar from "react-calendar";
import EqualToSeperator from "../ui_elems/equal_to_seperator";

export default function ReserveTicket(){
    const router = useRouter();
    const [value, setValue] = useState(new Date());
    const [options, setOptions] = useState({
        'KYJ': 'Kayamkulam',
        'ERS': 'Ernakulam South',
        'ERT': 'Ernakulam North'
    })
    const [schedule, setSchedule] = useState({});
    const [bill, setBill] = useState([])

    const handleChange=(e)=>{
        const {id, value} = e.target;
        setSchedule(prevState=>({
            ...prevState,
            [id] : value
        }))
    }

    const handleDate=(value)=>{
        setSchedule(prevState=>({
            ...prevState,
            date : value.toLocaleDateString("en-IN")
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (schedule.start==undefined || schedule.destination==undefined || schedule.date==undefined){
            console.log("No start or stop", schedule.date)
        }else{
            console.log("Submitted ", schedule);
            router.push('/bill');
        }
    }

    useEffect(()=>{
        console.log(schedule);
    },[schedule])
    return(
        <>
        <div className={`${RED_BG} text-white my-[20px] py-[30px]`}>
            <p className="flex justify-center text-[50px] mb-[30px]">RESERVATION</p>
            <form id="form" onSubmit={handleSubmit} className="flex flex-col items-center gap-y-[30px]">
                <div className="max-w-[350px] text-[17px]">
                    <Calendar onChange={setValue} value={value} minDate={new Date()} onClickDay={handleDate} />
                </div>
                <div className="w-full flex px-[30px]">
                    <div className="flex-1 flex items-start flex-col">
                        <label htmlFor="start">Start</label>
                        <select name="start" id="start" onChange={handleChange} className="min-h-[50px] min-w-[270px] text-black px-[10px]">
                            <option value="none" defaultValue={'none'} disabled hidden>Select Start</option>
                            {Object.keys(options).map((key, index)=>(
                                <option value={key} key={key}>{options[key]}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-1 flex items-end flex-col">
                        <label htmlFor="destination" className="">Destination</label>
                        <select name="destination" id="destination" onChange={handleChange} className="min-h-[50px] min-w-[270px] text-black px-[10px]">
                            <option value="none" defaultValue={'none'} disabled hidden>Select Destination</option>
                            {Object.keys(options).map((key, index)=>(
                                <option value={key} key={key}>{options[key]}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex-1 flex min-w-full px-[30px]">
                    <button type="button" onClick={()=>{setBill(['hello']); router.push('/#bill')}} className="min-h-[50px] flex-1 bg-red-500 hover:bg-white hover:text-black duration-300">View Bill</button>
                </div>
            </form>
        </div>
        <div id="bill" className={`${RED_TEXT} my-[20px] ${bill.length==0?"hidden":""}`}>
            <EqualToSeperator/>
            <p className="flex justify-center text-[50px] mb-[20px]">BILL</p>
            <EqualToSeperator/>
            <div className="flex [&>*]:flex-1 flex-1 my-[20px] text-[22px]">
              <button className="hover:bg-[#a82726] hover:text-white">VALLEHERMOSO</button>
              <button className="hover:bg-[#a82726] hover:text-white">NOVITIATE</button>
              <button className="hover:bg-[#a82726] hover:text-white">COUNT</button>
              <p className="">- OH, IT'S WE</p>
            </div>
            <EqualToSeperator/>
            <div className="flex flex-col [&>*]:flex-1 flex-1 my-[20px] text-[22px]">
              <div className="hover:bg-[#a82726] hover:text-white flex">
                <p className="flex-1 flex justify-start">VALLEHERMOSO</p>
                <p className="flex-1 flex justify-end">1</p>
              </div>
              <div className="hover:bg-[#a82726] hover:text-white flex">
                <p className="flex-1 flex justify-start">NOVITIATE</p>
                <p className="flex-1 flex justify-end">1</p>
              </div>
              <div className="hover:bg-[#a82726] hover:text-white flex">
                <p className="flex-1 flex justify-start">COUNT</p>
                <p className="flex-1 flex justify-end">1</p>
              </div>
              <div className="flex">
                <p className="flex-1 flex justify-start">OH, IT'S WE</p>
                <p className="flex-1 flex justify-end">1</p>
              </div>
            </div>
            <EqualToSeperator/>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-y-[30px] mt-[20px]">
                <div className="flex-1 flex min-w-full">
                    <button type="submit" className={`${RED_BG} min-h-[50px] text-white flex-1 hover:bg-white hover:text-black duration-300`}>Pay Up</button>
                </div>
            </form>
        </div>
        </>
    )
}