import React from 'react'
import { FaCheck } from 'react-icons/fa6'


interface Props {
    label?: string;
    id: string;
    checked:boolean;
    onChange: () => void

}

const Checkbox = ({ label, id, checked, onChange }: Props) => {

    return (
        <div className='flex justify-center gap-3 items-center'>
            <span>{label != null ? label.concat(':') : ""}</span>
            <div className="inline-flex items-center">
                <label
                    className="relative flex items-center  rounded-full cursor-pointer"
                    htmlFor={id}
                >
                    <input
                        checked = {checked}
                        onChange = {onChange}
                        type="checkbox"
                        className="peer 
                            bg-[#47484E] border-none
                            relative appearance-none w-4 h-4 border rounded-[3px] cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-[#47484E] "
                        id={id}
                    /><span
                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
                    >
                        <FaCheck size={10} />
                    </span>
                </label>
            </div>
        </div>
    )
}

export default Checkbox
