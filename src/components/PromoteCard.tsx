'use client'
import { useWindowListener } from "@/hooks/useWindowListener"
import { VideoPlayer } from "./VideoPlayer"
import { useEffect, useState } from "react"

export function PromoteCard() {

    const [playing, setPlaying] = useState(true)

    useWindowListener('contextmenu', (e) => {(e).preventDefault()})

    return (
        <div className="w-[70%] mx-[15%] my-8 p-4 rounded-lg flex flex-row bg-slate-200">
            <VideoPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={playing}></VideoPlayer>
            <div className="ml-8 my-4 text-lg font-semibold flex flex-col justify-between">
                Get your vaccine today.
                <button className='w-[50%] text-base block bg-cyan-600 text-white border border-cyan-300 
                left-4 py-1 rounded-2xl z-30 hover:bg-cyan-700'
                onClick={() => {setPlaying(!playing)}}>
                    {playing ? 'Pause' : 'Play'}
                </button>
            </div>
            
        </div>
    )
}