import Image from "next/image"
function Smallcard({img,distance,location}) {
    return (
       <div className="flex items-center m-2 space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
        <div className="relative h-10 w-10 ">
        <Image src={img} layout="fill" className="rounded-lg"/>
       
        </div>
        <div>
        <h4>{distance}</h4>
        <h5>{location}</h5>
        </div>
       
        </div>
        
    )
}

export default Smallcard
