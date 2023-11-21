import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function TopMenuBar() {

    const session = await getServerSession(authOptions)

    return(
        <div className="bg-blue-900 h-[100px] bg-white z-40 fixed flex flex-row-reverse 
        top-0 left-0 right-0 border-2 border-gray-400">
            <Image src={'/img/logo.png'} className="h-full w-auto" 
            alt="logo" width={0} height={0} sizes="100vh"/>
            <TopMenuItem title="Booking" pageRef="/booking"/>
            <TopMenuItem title="Hospitals" pageRef="/hospital" />
            <div className="flex flex-row items-center absolute left-0 h-full">    
                {
                    session? <Link href="api/auth/signout"><div className='mx-0 px-[50px] text-center 
                    text-cyan-600 font-bold text-xl hover:text-cyan-800'>
                        Sign-Out</div></Link>
                        :<Link href="api/auth/signin"><div className='mx-0 px-[50px] text-center
                        text-cyan-600 font-bold text-xl hover:text-cyan-800'>
                            Sign-In</div></Link>
                }
                <TopMenuItem title="MyBooking" pageRef="/mybooking" />
            </div>
            
        </div>     
    )
}