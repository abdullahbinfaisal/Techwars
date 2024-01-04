"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from "react";
import { redirect } from 'next/navigation'


export default function Home() {

  
  const [username, setUsername] = useState("");
  const [dummy, setDummy] = useState(false)
  const [valid, setValid] = useState(false)

  const Hrs = 2
  const Mins = 21
    
  var date = new Date()

    useEffect( () => {
        setTimeout(
            () => {
                console.log(date.getMinutes())
                if(date.getHours() == Hrs && date.getMinutes() == Mins){
                    setValid(true)
                }
                else{
                  setDummy(!dummy)
                }
            }, 1000
            )
    })

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900 justify-between p-24">
      <Image
        src="/TechWars.png"
        width={200}
        height={200}
        priority
      />
      
    <div className='flex flex-col gap-4 items-center'>
      <h1 className='text-center text-white'>Team ID:</h1>
      <input type="text" className="p-2 px-4 rounded-lg" onChange={ (e) => setUsername(e.target.value)} />
      <Link 
        className={!valid ? 'pointer-events-none' : ''} 
        aria-disabled={!valid} 
        tabIndex={!valid? -1 : undefined}
        href={{
          pathname: '/arena',
          query: {
            ID: username
          }
        }}
      >
      <button className={valid ? 'px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-500': 'px-4 py-2 bg-gray-400 text-gray-900 rounded-lg hover:bg-cyan-500' }>
        Start {dummy}
      </button>
      </Link>
    </div>

        
    </main>
  )
}
