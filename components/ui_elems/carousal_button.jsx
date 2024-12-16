export default function CarousalButton(){
    return(
      <div className="overflow-hidden w-[670px]">
        <button className="flex items-center animate-infinite-scroll-x">
          {[...Array(10)].map((_, index) => (
            <p 
              key={index} 
              className="px-4 whitespace-nowrap text-lg"
            >
              Regista
            </p>
          ))}
          {[...Array(10)].map((_, index) => (
            <p 
              key={`repeat-${index}`} 
              className="px-4 whitespace-nowrap text-lg"
            >
              Regista
            </p>
          ))}
        </button>
      </div>
    )
  }