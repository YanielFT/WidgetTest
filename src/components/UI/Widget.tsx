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

    const onChangeSwitch = (id: number) => {
        setChecks(checks.map(x => {
            if (x.id === id) return { ...x, isChecked: !x.isChecked };
            else return { ...x, isChecked: false };
        }));
    }

    return (
        <div className='w-[340px] h-[193px] bg-[#302F35] rounded-[12px] opacity-100 py-[17px] px-[15px] pb-5 pr-5'>

            <div className='flex justify-between items-center'>
                <h1 className='text-sm uppercase leading-2'>extrusion</h1>

                <div className='flex items-center justify-center gap-3 float-right text-[#D8D8D8] mt-1'>
                    <FaCircleQuestion fill='gray' className='w-4 h-4' />
                    <FaChevronUp />
                </div>
            </div>


            <div id='layaoutForm' className='mt-[19px]'>
                    <span className='justify-self-end'>Linear : </span>
                    <Checkbox
                        checked={checks[0].isChecked} onChange={() => onChangeSwitch(checks[0].id)}
                        id='linear' />
                    <NumberInput />

                    <span className='row-start-2 justify-self-end'>Variable : </span>
                    <Checkbox 
                        className = {"row-start-2"}
                        checked={checks[1].isChecked} onChange={() => onChangeSwitch(checks[1].id)}
                        id='variable' />
                    <NumberInput label="Min" className='row-start-2' />
                    <NumberInput label="Max" className='row-start-2'/>
        


            </div>

            <div>
                <button className="bg-[#4E4E54] text-[14px] text-[#CCCCCC] font-semibold px-6 py-1 rounded-[17px] float-right mt-[20px]">
                    Smart Reset
                </button>
            </div>

        </div>
    )
}
