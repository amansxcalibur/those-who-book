'use client'

import { RED_BG } from "@/app/constants/colors"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CarousalButton(){
  const router=useRouter();
    return(
      <div className="overflow-hidden w-[670px]">
        <button className={`${RED_BG} hover:bg-[#343131] duration-300 flex items-center animate-infinite-scroll-x text-white text-[50px] my-[15px] -py-[10px]`} onClick={()=>{router.push('/#form')}}>
          {[...Array(10)].map((_, index) => (
            <p 
              key={index} 
              className="whitespace-nowrap px-4"
            >
              *RESERVA
            </p>
          ))}
          {[...Array(10)].map((_, index) => (
            <p 
              key={`repeat-${index}`} 
              className="whitespace-nowrap px-4"
            >
              *RESERVA
            </p>
          ))}
        </button>
      </div>
    )
  }