import { useState } from "react";
import Bill from "../tables/bill";
import { RED_BG } from "@/app/constants/colors";
import { endpoint } from "@/app/constants/api";

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

export default function UserDetails({ bill, selected }) {
    const [userDetails, setUserDetails] = useState({
        id: "",
        name: "",
        age: "",
        contact: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const ticket=await postAsyncDetails(userDetails, selected);
        console.log("Submitted User Details:", userDetails);
        console.log("Ticket", ticket);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <p className="text-center text-[50px]">USER DETAILS</p>
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex w-full px-[30px]">
                        <div className="flex-1 flex justify-start">
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
                            <div className="flex-1 flex justify-end">
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
                            <div className="flex flex-1 justify-start">
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
                            <div className="flex flex-1 justify-end">
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
                    <button type="submit" className={`${RED_BG} text-white mt-4 min-h-[50px] m-[30px]`}>
                        Display Bill
                    </button>
                </div>
            </form>
            <Bill bill={bill} handleSubmit={handleSubmit} />
        </>
    );
}
