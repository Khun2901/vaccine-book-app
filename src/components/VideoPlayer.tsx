'use client'

import { useRef, useEffect } from "react"

export function VideoPlayer({vdoSrc, isPlaying}: {vdoSrc: string, isPlaying: boolean}) {
    
    const vdoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if(isPlaying){
            vdoRef.current?.play()
        }   
        else{
            vdoRef.current?.pause()
        }
    }, [isPlaying])
    
    return (
        <video className="w-[40%]" src={vdoSrc} ref={vdoRef} muted loop controls />
    )
}