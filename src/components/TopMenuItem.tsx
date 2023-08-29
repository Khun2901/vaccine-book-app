import Link from "next/link";
import Image from "next/image";

export default function TopMenuItem( {title, pageRef} 
    : {title: string, pageRef: string} ) {
    return(
        <Link className="w-[200px] item-center text-center text-gray-200 text-xl
        font-bold mt-auto mb-auto font-sans " href={pageRef}>{title}</Link>
    )
}