"use client"
import React from 'react'
import { useState } from 'react'

function Answer({props}) {
    
    const [correct, SetCorrect] = useState(false)
    const [ans, setAns] = useState("")
    const [hide, setHide] = useState("hidden")

    
    const handleChange = (e) => {
        setAns(e.target.value)
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log(e)
        if (ans == props.Answer){
            SetCorrect(true)
        }
        else{
            setHide("text-red")
        }
    }
    
    return (
        correct ? 
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
            <div className={hide}>Answer Incorrect!</div>
        </div>
    )
}

export default Answer
