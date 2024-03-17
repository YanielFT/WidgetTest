import React, { useState } from 'react'
import NumberInput from './NumberInput';
import { FaChevronUp } from "react-icons/fa6";
import { FaCircleQuestion } from "react-icons/fa6";
import Checkbox from './Checkbox';



export default function Card() {
    const [checks, setChecks] = useState([
        { id: 1, isChecked: true },
        { id: 2, isChecked: false }
    ]);

    const onChangeSwitch = (id:number) =>{
        setChecks(checks.map(x => {
            if(x.id === id) return {...x, isChecked: true};
            else return {...x, isChecked: false};
        }));
    }
    
    return (
        <div className='w-[340px] h-[193] bg-[#302F35] rounded-xl opacity-100 p-5'>

            <div className='flex items-center justify-center gap-3 float-right text-[#D8D8D8]'>
                <FaCircleQuestion fill='gray' className='w-4 h-4' />
                <FaChevronUp />
            </div>

            <h1 className='text-[14px] uppercase'>extrusion</h1>

            <div className='m-7 flex items-center justify-start gap-3 '>
                <Checkbox
                checked={checks[0].isChecked} onChange={()=>onChangeSwitch(checks[0].id)}
                id='linear' label='Linear'/>
                <NumberInput />
            </div>

            <div className='m-7 flex items-center justify-center gap-2 '>
                <Checkbox 
                checked={checks[1].isChecked} onChange={()=>onChangeSwitch(checks[1].id)}
                id='variable' label='Variable' />


                <NumberInput label="Min" />
                <NumberInput label="Max" />
            </div>


            <div>
                <button className="bg-[#4E4E54] text-[14px] text-[#CCCCCC] font-semibold px-6 py-1 rounded-[17px] float-right">
                    Smart Reset
                </button>
            </div>

        </div>
    )
}
