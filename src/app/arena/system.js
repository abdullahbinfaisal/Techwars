'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

function System() {

    const props = useSearchParams()
    const userID = props.get('ID') 
    return (
            
            <div className="flex items-center">
                {userID}
            </div>
        
    )
}

export default System
