import { RED_BG, RED_TEXT } from "@/app/constants/colors";
import EqualToSeperator from "../ui_elems/equal_to_seperator";
import DownlaodIcon from "../svg/download";

export default function Ticket({bill, handleSubmit, ticket}){
    return(
        <div id="bill" className={`${RED_TEXT} my-[20px] ${bill.length==1?"hidden":""}`}>
            <EqualToSeperator/>
            <p className="flex justify-center text-[50px] mb-[10px]">TICKET</p>
            <EqualToSeperator/>
            
            <div className="hover:bg-[#a82726] hover:text-white flex items-center">
                <p className="flex-1 flex justify-start text-[50px] font-semibold tracking-tighter"><span className="mr-[10px]">SEAT</span>NO<span className="mx-[10px]">-</span>{ticket?.seat_number}</p>
                <p className="flex-1 flex justify-end text-[30px] font-light">Happy Journey</p>
            </div>
            <EqualToSeperator/>
            <div className="flex flex-col [&>*]:flex-1 flex-1 my-[20px] text-[22px]">
              <div className="flex flex-1 mt-[15px] font-semibold text-[27px]">
                <button className="hover:bg-[#a82726] hover:text-white">
                  <span className="font-normal">BUS NO:</span>{ticket?.schedule.bus_number}
                </button>
                <div className="flex-1"></div>
                <p className="hover:bg-[#a82726] hover:text-white"><span className="font-normal">TICKET ID:</span>{ticket?.ticket_id}</p>
              </div>
              <div className="flex flex-1 mb-[15px] font-semibold text-[27px]">
                <p className="hover:bg-[#a82726] hover:text-white"><span className="font-normal">PASSENGER ID:</span>{ticket?.passenger_id}</p>
              </div>
              <div className="hover:bg-[#a82726] hover:text-white flex items-center">
                <p className="flex-1 flex justify-start text-[35px] font-semibold">{ticket?.schedule.departure_time}</p>
                <p>TO</p>
                <p className="flex-1 flex justify-end text-[35px] font-semibold">{ticket?.schedule.arrival_time}</p>
              </div>
              <div className="hover:bg-[#a82726] hover:text-white flex">
                <p className="flex-1 flex justify-start">{new Date(ticket?.schedule.date).toLocaleDateString("en-IN")}</p>
                <p className="flex-1 flex justify-end">{new Date(ticket?.schedule.date).toLocaleDateString("en-IN")}</p>
              </div>
              <div className="hover:bg-[#a82726] hover:text-white flex">
                <p className="flex-1 flex justify-start">{ticket?.schedule.source}</p>
                <p className="flex-1 flex justify-end">{ticket?.schedule.destination}</p>
              </div>
              {/* <div className="flex">
                <p className="flex-1 flex justify-start">OH, IT'S WE</p>
                <p className="flex-1 flex justify-end">1</p>
              </div> */}
            </div>
            <EqualToSeperator/>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-y-[30px] mt-[20px]">
                <div className="flex-1 flex min-w-full">
                    <button type="submit" className={`${RED_BG} min-h-[50px] text-white flex-[2] hover:bg-white border hover:border hover:text-black duration-300`}>Book Again</button>
                    <div className={`flex-[3] [&>*]:size-12 flex items-center justify-end hover:[&>*]:${RED_BG} hover:[&>*]:text-white [&>*]:duration-300`}>
                      <DownlaodIcon/>
                    </div>
                </div>
            </form>
        </div>
    )
}