import ReserveTicket from "@/components/forms/reserve_ticket";
import CarousalButton from "@/components/ui_elems/carousal_button";
import EqualToSeperator from "@/components/ui_elems/equal_to_seperator";
import Image from "next/image";
import { RED_TEXT, RED_BG } from "./constants/colors";

export default function Home() {
  return (
    <div className={`${RED_TEXT} min-h-screen flex`}>
      <div className="fixed top-0 left-0 w-full h-full -z-10 grid grid-cols-9 flex-1 blur-sm bg-white">
        {[1,2,3,4,5,6,7,8,9].map((key, index)=>(
          <div className="grid grid-rows-5" key={index}>
            {[1,2,3,4,5].map((key, index)=>(
              <div className="border border-solid border-gray-600" key={index}></div>
            ))}
          </div>
        ))}
      </div>
      <div className="w-full h-full flex justify-center overflow-y-scroll">
        <div className="shadow-2xl bg-white min-w-[730px] flex p-[30px]">
          <div className="flex-1">
            <EqualToSeperator/>
            <div className="flex [&>*]:flex-1 flex-1 my-[20px] text-[22px]">
              <button className="hover:bg-[#a82726] hover:text-white">VALLEHERMOSO</button>
              <button className="hover:bg-[#a82726] hover:text-white">NOVITIATE</button>
              <button className="hover:bg-[#a82726] hover:text-white">COUNT</button>
              <p className="">- OH, IT'S WE</p>
            </div>
            <EqualToSeperator/>
            <p className="text-[50px] flex justify-center my-[15px]">THOSE WHO BOOK</p>
            <EqualToSeperator/>
            <div className="flex items-center flex-col my-[15px] text-[17px]">
              <p className="underline">C/VALLEHERMOSO 36, 28015, MADRID</p>
              <p className="underline">91 138 9995</p>
              <p>TUESDAY TO SATRUDAY FROM 13:30H TO 16H / 20:30H TO 23H</p>
            </div>
            <EqualToSeperator/>
            <CarousalButton/>
            <EqualToSeperator/>
            <div className="flex flex-col items-center max-w-[670px] text-[16px] my-[20px] leading-5">
              <p className="text-center">Vallehermoso is the home of our parents, the first place we opened, ten years ago, in the Vallehermoso Market; it is our absolute reference. 
                He is literally surrounded by the companions who have seen us grow, such as Javi and Anita (the fishers), or Higino (pollero) and Antonio (butcher). 
                They serve us their product and we shape it.</p>
              <p className="text-center">Vallehermoso is a Spanish tasca in a lifelong Madrid market. In Vallehermoso we serve Asian (semi)-traditional food, prepared with open cuisine, with a very 
                fresh product bought in the same market and at affordable prices compared to the stars that surround us outside and within the market.</p>
              <p className="text-center">Here you can eat our most iconic meals, which we have them, such as Korean ribs, the red gambones curry, the butifarra dumplings and the eggplant of Sichuan. 
                It is a small place, which occupies part of the corridors of the market, in which the music and screams from side to the bar are mixed with the commands and the transfer of waiters, cooks and customers.</p>
            </div>
            <EqualToSeperator/>
            <ReserveTicket/>
            <EqualToSeperator/>
            <div>
              <p className="flex justify-center text-[50px]">A PROJECT BY</p>
              <div className="flex text-[20px]">
                <ul className={`flex-[3] hover:[&>*]:bg-[#a82726] hover:[&>*]:text-white flex items-start flex-col`}>
                  <li>Abhinav M</li>
                  <li>Aman V Shafeeq</li>
                  <li>Gautham M</li>
                  <li>Harikrishna TP</li>
                  <li>Hridesh MG</li>
                  <li>Joseph TM</li>
                </ul>
                <ul className="flex-1 hover:[&>*]:bg-[#a82726] hover:[&>*]:text-white">
                  <li>GitHub</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
