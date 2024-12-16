export default function EqualToSeperator(){
    return(
        <div className="max-w-[670px] w-full flex gap-x-[2px]">
            {[...Array(50).keys()].map((key, index)=>(
                <div key={index} className="min-h-[5px] flex-1 border-y-2 border-solid border-[#a82726]"></div>
            ))}
        </div>
    )
}