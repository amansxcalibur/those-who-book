import { RED_BG, RED_TEXT } from "@/app/constants/colors";
import EqualToSeperator from "../ui_elems/equal_to_seperator";
import DownlaodIcon from "../svg/download";

export default function Ticket({bill, ticket}){

    const handleSubmit=(e)=>{
      console.log("Redirecting");
    }
    return(
        <div id="bill" className={`${RED_TEXT} ${RED_BG} h-screen fixed top-0 -my-[0px] w-[730px] -mx-[30px] ${bill.length==1?"hidden":""} flex flex-col justify-center`}>

          <div className="brightness-0 invert flex-1 mt-10 flex flex-col items-center">
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
          </div>
          <p className={`bg-white px-[6px] font-bold text-center absolute top-[75px] left-[50%] -translate-x-1/2 -translate-y-1/4 text-[30px]`}>THOSE-WHO-BOOK</p>


          <div className="max-w-[730px] w-full flex gap-x-[10px] ml-[10px]">
            {[...Array(24).keys()].map((key, index)=>(
                <div key={index} className="min-h-[20px] translate-y-1/2 rounded-full min-w-[20px] bg-[#a82726]"></div>
            ))}
          </div>
          <div className="bg-white flex flex-col justify-center pt-5 px-[30px] mx-[30px] pb-10">
          
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
                    <button onClick={()=>{location.reload()}} type="submit" className={`${RED_BG} min-h-[50px] text-white flex-[2] hover:bg-white border hover:border hover:text-black duration-300`}>Book Again</button>
                    <div className={`flex-[3] [&>*]:size-12 flex items-center justify-end hover:[&>*]:${RED_BG} hover:[&>*]:text-white [&>*]:duration-300`}>
                      <DownlaodIcon/>
                    </div>
                </div>
            </form>
            </div>
            <div className="max-w-[730px] w-full flex gap-x-[10px] ml-[10px]">
            {[...Array(24).keys()].map((key, index)=>(
                <div key={index} className="min-h-[20px] -translate-y-1/2 rounded-full min-w-[20px] bg-[#a82726]"></div>
            ))}
          </div>

          <div className="brightness-0 invert flex-1 flex flex-col justify-end items-center mb-10">
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
            <EqualToSeperator/>
          </div>
          <p className={`${RED_TEXT} bg-white px-[6px] font-bold text-center absolute bottom-[50px] left-[50%] -translate-x-1/2 -translate-y-1/4 text-[30px]`}>SNOW</p>

        </div>
    )
}