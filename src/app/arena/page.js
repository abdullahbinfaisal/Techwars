import React from 'react'
import Image from 'next/image'
import Time from './time'
import Answer from './answer'
import Main from './main'


import { promises as fs } from 'fs';

export default async function Arena () {
    
    const file = await fs.readFile(process.cwd() + '/public/questions.json', 'utf8');
    const data = JSON.parse(file);


    return (
        <Main props={data}></Main>
    )
}

