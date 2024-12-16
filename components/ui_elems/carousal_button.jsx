import { RED_BG } from "@/app/constants/colors"

export default function CarousalButton(){
    return(
      <div className="overflow-hidden w-[670px]">
        <button className={`${RED_BG} flex items-center animate-infinite-scroll-x text-white text-[50px] my-[15px] -py-[10px]`}>
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