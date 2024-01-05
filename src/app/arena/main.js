"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {collection, addDoc} from 'firebase/firestore'
import { useSearchParams } from 'next/navigation'
import { db } from '../../../utils/firebase'

function Main({props}) {

    const [q, setQ] = useState(0)
    const [correct, SetCorrect] = useState(false)
    const [ans, setAns] = useState("")
    const [hide, setHide] = useState("hidden")
    const [time, setTime] = useState(props[0].Time)
    const [penalty, setPenalty] = useState(0)
    const [complete, setComplete] = useState(false)
    
    let docID = "";
    let score = 0
    let check = false
    const teamID = useSearchParams()
    const userID = teamID.get('ID')
   

    useEffect( () => {
        setTimeout(()=>{
            if(time != 0){
                setTime(()=>{
                    setTime(time - 1)
                })
            }
            if(time == 0){
                if(q+1 <= 12){
                    setQ( q + 1)
                    setTime(
                        props[q + 1].Time
                    )
                    SetCorrect(false)
                    setPenalty(0)
                }
                else{
                    setComplete(true)
                }
            }
        }, 1000)
    })

    // useEffect(
    //     () => {
    //     console.log("triggered")
    //     setTimeout(
    //         () => {
    //             setQ( 1 )
    //             p += 1;
    //             setTime(props[p].Time)
    //         }, (props[p].Time*1000))
    //     }, p
    // )

    const handleChange = (e) => {
        setAns(e.target.value)
    }

    
    const SubmitHandler = async (e) => {
        e.preventDefault()
        console.log(e) 
        if (ans == props[q].Answer){
            
            score = (time - (15*penalty));
            SetCorrect(true)
            const colRef = collection(db, 'Users')
            await addDoc(colRef, {
                    "Score": score,
                    "Team ID": userID,
                    "Question": props[q].Num
                })
        }
        else
        {
            setPenalty(penalty + 1)
            setHide("my-2")
        }
    }

    if (complete){
        return <div className='w-full p-8 h-screen bg-gray-900 text-white flex justify-center items-center'>Challenge Complete!</div>
    }

    else{

    return (
        
        <div className='w-full p-8 h-screen bg-gray-900 text-white'> 
            <div className='grid grid-cols-7 gap-x-4 '>        
            <div className='col-start-1'>
                    <Image
                    src="/TechWars.png"
                    width={120}
                    height={120}
                    priority
                    />
            </div>

            <div className='col-start-4'>    
                <div className='bg-gray-800 p-4 rounded-lg text-center w-full'>
                    {Math.floor(time/60)} : {time%60}
                </div>
            </div>

            <div className='col-start-7 flex items-center'>
                <div className="flex items-center">
                    {userID}
                </div>  
            </div>
        </div>

        
        <div className='grid grid-cols-8 my-8'>
            <div className=' col-span-1'>
                <div className='mx-8 p-1 rounded-lg text-center bg-gray-800 text-white'>{props[q].Num}</div>
            </div>
            <div className='text-white col-span-7 '>
                <p className='text-wrap'>{props[q].Text}</p>
            </div>
        
        </div>
        

        <div className='col-start-1 col-span-8 mx-8 my-16'>
            {correct ? 
            <div>
                Correct Answer Submitted!
            </div>
            :
            <div>
                <p className="my-2">Answer:</p>
                    <form className='w-full grid-cols-8 grid gap-4 '>
                        <input className="col-span-7 px-4 py-4 bg-gray-800 rounded-lg" onChange={(e) => handleChange(e)} type="text" />
                        <button type="submit" className='col-span-1 bg-blue-600 hover:bg-blue-700 px-4 py-4 rounded-lg' onClick={(e) => SubmitHandler(e)}>Submit</button>
                    </form>
                <div className={hide}>{penalty} incorrect attempt(s)!</div>
            </div>
            
            }
        </div>

       


    </div>
        )
}
}

export default Main
