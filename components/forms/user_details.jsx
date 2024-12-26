import { useState } from "react";
import Ticket from "../tables/ticket";
import { RED_BG } from "@/app/constants/colors";
import { endpoint } from "@/app/constants/api";
import EqualToSeperator from "../ui_elems/equal_to_seperator";
import Arrow from "../svg/upward-arror";

async function postAsyncDetails(userDetails, selected) {
    try {
        let response;
        if (userDetails.id!=undefined && userDetails.id!='' && selected!=undefined && selected!=''){
            console.log("IN HERE")
            response = await fetch((endpoint + '/create_ticket?' + new URLSearchParams({
                sched_id: selected,
                pass_id: userDetails.id
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

export default function UserDetails({ bill, selected, setOpenInput, setSelected }) {
    const [userDetails, setUserDetails] = useState({
        id: "",
        name: "",
        age: "",
        contact: ""
    });
    const [ticket, setTicket] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const ticketObj=await postAsyncDetails(userDetails, selected);
        console.log("Submitted User Details:", userDetails);
        console.log("Ticket", ticketObj);
        setTicket(ticketObj.ticket)
    };

    return (
        <>
        {ticket?
                <Ticket bill={bill} handleSubmit={handleSubmit} ticket={ticket} />
                :
                <>
            <form onSubmit={handleSubmit} className="h-full flex flex-col">
                <div className="flex flex-col">
                    <button onClick={()=>{setSelected(); setOpenInput(false)}} className={`absolute mt-1 [&>*]:size-16 hover:[&>*]:text-white hover:[&>*]:${RED_BG} [&>*]:rounded-full [&>*]:p-2 -rotate-[135deg]`}><Arrow/></button>
                    <p className="text-center text-[50px]">USER DETAILS</p>
                    <EqualToSeperator/>
                    <div className="flex flex-col gap-2 w-full mt-5">
                        <div className="flex w-full px-[30px]">
                        <div className="flex-1 flex flex-col items-start">
                            <label htmlFor="id">ID</label>
                                <input
                                    required
                                    type="number"
                                    name="id"
                                    placeholder="ID"
                                    value={userDetails.id}
                                    onChange={handleChange}
                                    className="min-h-[50px] min-w-[270px] text-black px-[10px] border"
                                />
                            </div>
                            <div className="flex-1 flex flex-col items-end">
                                <label htmlFor="name">Name</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={userDetails.name}
                                    onChange={handleChange}
                                    className="min-h-[50px] min-w-[270px] text-black px-[10px] border"
                                />
                            </div>
                        </div>
                        <div className="flex w-full px-[30px]">
                            <div className="flex flex-1 flex-col items-start">
                                <label htmlFor="age">Age</label>
                                <input
                                    required
                                    type="number"
                                    name="age"
                                    placeholder="Age"
                                    value={userDetails.age}
                                    onChange={handleChange}
                                    className="min-h-[50px] min-w-[270px] text-black px-[10px] border"
                                />
                            </div>
                            <div className="flex flex-1 flex-col items-end">
                                <label htmlFor="Contact">Contact</label>
                                <input
                                    required
                                    type="number"
                                    name="contact"
                                    placeholder="Contact"
                                    value={userDetails.contact}
                                    onChange={handleChange}
                                    className="min-h-[50px] min-w-[270px] text-black px-[10px] border"
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className={`${RED_BG} text-white mt-6 min-h-[50px] m-[30px]`}>
                        Book-Ticket 💀
                    </button>
                </div>
                <div className="flex flex-col items-center max-w-[670px] text-[16px] my-[20px] leading-5 mt-[60px]">
                    <p className="text-center">Vallehermoso is the home of our parents, the first place we opened, ten years ago, in the Vallehermoso Market; it is our absolute reference. 
                        He is literally surrounded by the companions who have seen us grow, such as Javi and Anita (the fishers), or Higino (pollero) and Antonio (butcher). 
                        They serve us their product and we shape it.</p>
                    <p className="text-center">Vallehermoso is a Spanish tasca in a lifelong Madrid market. In Vallehermoso we serve Asian (semi)-traditional food, prepared with open cuisine, with a very 
                        fresh product bought in the same market and at affordable prices compared to the stars that surround us outside and within the market.</p>
                    <p className="text-center">Here you can eat our most iconic meals, which we have them, such as Korean ribs, the red gambones curry, the butifarra dumplings and the eggplant of Sichuan. 
                        It is a small place, which occupies part of the corridors of the market, in which the music and screams from side to the bar are mixed with the commands and the transfer of waiters, cooks and customers.</p>
                </div>
            </form>
            <div className="fixed bottom-5 w-[670px] text-center">
                <EqualToSeperator/>
                <p className="text-[30px] flex justify-center font-bold">THOSE-WHO-BOOK&trade;</p>
                <EqualToSeperator/>
            </div>
            </>
            }
        </>
    );
}
