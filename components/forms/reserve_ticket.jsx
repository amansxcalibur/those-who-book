'use client'

import { RED_BG, RED_TEXT } from "@/app/constants/colors";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import Calendar from "react-calendar";
import EqualToSeperator from "../ui_elems/equal_to_seperator";
import { endpoint } from "@/app/constants/api";
import Bill from "../tables/bill";
import Schedules from "../tables/schedules";

async function getAsyncApi(start) {
    try {
        let response;
        if (start!=undefined && start!=''){
            console.log("IN HERE")
            response = await fetch((endpoint + '/bill?' + new URLSearchParams({
                source: start
            }).toString()));
        }else{
            response = await fetch((endpoint + '/bill'));
        }
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // console.log(endpoint + '/bill?' + new URLSearchParams({
        //     destination: "hello"
        // }).toString());
        return data;
    } catch (error) {
        console.error('Error fetching API:', error);
        return null;
    }
}

async function getAsyncSchedules(input) {
    try {
        let response;
        if (input.start!=undefined && input.start!='' && input.destination!=undefined && input.destination!=''){
            console.log("IN HERE")
            response = await fetch((endpoint + '/available?' + new URLSearchParams({
                source: input.start,
                destination: input.destination
            }).toString()));
        }
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // console.log(endpoint + '/bill?' + new URLSearchParams({
        //     destination: "hello"
        // }).toString());
        return data;
    } catch (error) {
        console.error('Error fetching API:', error);
        return null;
    }
}

export default function ReserveTicket(){
    const router = useRouter();
    const [value, setValue] = useState(new Date());
    const [options, setOptions] = useState({start:[], destination:[]})
    const [input, setInput] = useState({start:'', destination:'', date: new Date()});
    const [bill, setBill] = useState([])
    const [schedules, setSchedules] = useState([]);

    useEffect(()=>{
        async function getAvailableDestination() {
            const data = await getAsyncApi(input.start);
            console.log("triggering")
            setOptions(prevState=>({
                ...prevState,
                destination:data
            }));
        }
        if (input.start!=null && input.start!=undefined && input.start!=''){
            console.log("this is the start before the destination")
            getAvailableDestination();
        }
    },[input.start])

    useEffect(()=>{
        async function getAvailableStart() {
            const data = await getAsyncApi();
            console.log("triggering")
            setOptions(prevState=>({
                ...prevState,
                start:data
            }));
        }
        getAvailableStart();
    },[])

    
    async function getSchedules() {
        try {
            console.log("Getting schedules...");
            const data = await getAsyncSchedules(input);
            setSchedules(data);
            console.log("getschedules data ", data)
        } catch (error) {
            console.error("Error fetching schedules:", error);
        }
    }    

    const handleChange=(e)=>{
        const {id, value} = e.target;
        setInput(prevState=>({
            ...prevState,
            [id] : value
        }))
    }

    const handleDate=(value)=>{
        setInput(prevState=>({
            ...prevState,
            date : value.toLocaleDateString("en-IN")
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.start || !input.destination || !input.date) {
            console.log("Missing required fields", input);
            return;
        }
        console.log("Submitted schedule:", input);
        getSchedules(); // Fetch schedules before redirecting or taking further action
    };
    

    useEffect(()=>{
        console.log(input);
    },[input])
    useEffect(()=>{
        console.log("here are the options start\n",options)
    },[options.start])
    useEffect(()=>{
        console.log("here are the options destination\n",options)
    },[options.destination])
    return(
        <>
        <div className={`${RED_BG} text-white my-[20px] py-[30px]`}>
            <p className="flex justify-center text-[50px] mb-[30px]">RESERVATION</p>
            <form id="form" onSubmit={handleSubmit} className="flex flex-col items-center gap-y-[30px]">
                <div className="max-w-[350px] text-[17px]">
                    <Calendar minDate={new Date()} onClickDay={handleDate} />
                </div>
                <div className="w-full flex px-[30px]">
                    <div className="flex-1 flex items-start flex-col">
                        <label htmlFor="start">Start</label>
                        <select name="start" id="start" onChange={handleChange} defaultValue={input.start} className="min-h-[50px] min-w-[270px] text-black px-[10px]">
                            <option value="none" defaultValue={'none'} disabled hidden>Select Start</option>
                            {options.start?.map((value, key)=>(
                                <option value={value} key={key}>{value}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-1 flex items-end flex-col">
                        <label htmlFor="destination" className="">Destination</label>
                        <select name="destination" id="destination" onChange={handleChange} defaultValue={input.destination} className="min-h-[50px] min-w-[270px] text-black px-[10px]">
                            <option value="none" defaultValue={'none'} disabled hidden>Select Destination</option>
                            {options.destination?.map((value, key)=>(
                                <option value={value} key={key}>{value}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex-1 flex min-w-full px-[30px]">
                    <button type="submit" className="min-h-[50px] flex-1 bg-red-500 hover:bg-white hover:text-black duration-300">View Schedules</button>
                </div>
            </form>
        </div>
        <Schedules schedules={schedules}/>
        <Bill bill={bill} handleSubmit={handleSubmit}/>
        </>
    )
}