import React from 'react'

interface Props {
    label?: string;
}

const NumberInput = ({ label }: Props) => {
    return (
        <div className='flex gap-2 items-center justify-center'>
            <span>{label != null ? label.concat(':') : ""}</span>
            <span className='number-wrapper
            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            >
                <input type="number" className='hover:outline-none text-white' />
            </span>
        </div>
    )
}

export default NumberInput
