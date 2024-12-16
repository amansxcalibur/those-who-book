export default function EqualToSeperator(){
    return(
        <div className="bg-green-500 max-w-[670px] w-full flex gap-x-[2px]">
            {[...Array(50).keys()].map((key, index)=>(
                <div key={index} className="min-h-[10px] flex-1 border-y-2 border-solid border-black"></div>
            ))}
        </div>
    )
}