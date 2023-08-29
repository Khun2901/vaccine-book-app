import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenuBar() {
    return(
        <div className="bg-blue-900 h-[100px] bg-white z-30 fixed flex flex-row-reverse 
        top-0 left-0 right-0 border-2 border-gray-400">
            <Image src={'/img/logo.png'} className="h-full w-auto" 
            alt="logo" width={0} height={0} sizes="100vh"/>
            <TopMenuItem title="Booking" pageRef="/booking"/>
        </div>
        
    )
}