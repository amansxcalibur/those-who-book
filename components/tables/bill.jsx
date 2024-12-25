import { RED_BG, RED_TEXT } from "@/app/constants/colors";
import EqualToSeperator from "../ui_elems/equal_to_seperator";

export default function Bill({bill, handleSubmit}){
    return(
        <div id="bill" className={`${RED_TEXT} my-[20px] ${bill.length==0?"hidden":""}`}>
            <EqualToSeperator/>
            <p className="flex justify-center text-[50px] mb-[10px]">BILL</p>Available
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
    )
}