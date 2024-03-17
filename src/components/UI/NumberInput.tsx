import React from 'react'

interface Props {
    label?: string;
    className?: string;
}

const NumberInput = ({ label,className }: Props) => {
    return (
        <div className={` ${label && 'flex gap-2 items-center justify-center '} ${className}`}>
            <span>{label != null ? label.concat(':') : ""}</span>
            <span className='number-wrapper
            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            >
                <input type="number" className='hover:outline-none focus:outline-none text-white' />
            </span>
        </div>
    )
}

export default NumberInput
