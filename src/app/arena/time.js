"use client"
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'





function Time({props}) {
   
    const [time, setTime] = useState(props)

    useEffect( () => {
        setTimeout(()=>{
            if(time != 0){
                setTime(()=>{
                    setTime(time - 1)
                })
            }
        }, 1000)
    })

    console.log(time)
    
    return (
        <div className='bg-gray-800 p-4 rounded-lg text-center w-full'>
            {Math.floor(time/60)} : {time%60}
        </div>
    )
}

export default Time
