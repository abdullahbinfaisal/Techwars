import React from 'react'
import System from './system'
import Image from 'next/image'
import Time from './time'
import Answer from './answer'


import { promises as fs } from 'fs';

export default async function Arena () {
    
    const file = await fs.readFile(process.cwd() + '/public/questions.json', 'utf8');
    const data = JSON.parse(file);


    return (
        <main className='w-full p-8 h-screen bg-gray-900 text-white'>
        
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
                    
                    <Time props={data.Time}></Time>
                </div>

                <div className='col-start-7 flex items-center'>
                    <System></System>   
                </div>
            </div>

            
            <div className='grid grid-cols-8 my-8'>
                <div className=' col-span-1'>
                    <div className='mx-8 p-1 rounded-lg text-center bg-gray-800 text-white'>{data.Num}</div>
                </div>
                <div className='text-white col-span-7'>
                    {data.Text}
                </div>
               
            </div>
            

            <div className='col-start-1 col-span-8 mx-8 my-16'>
                <Answer props={data}></Answer>
            </div>
           


        </main>
    )
}

