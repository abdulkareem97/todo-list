import React, { useState } from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

import hand from '../images/hand.png';

const AddNote = ({ visible, hide, addNote }) => {
    const [note, SetNote] = useState('')
    const addNoteValidation = (note) => {
        if(note.length>0){
            SetNote('')
            addNote(note)
        }



    }
    return (
        <div className={`flex flex-col pt-36 items-center h-full bg-slate-800 transition-all duration-500 absolute w-full  ${visible ? 'right-0' : 'right-full'}`}>
            <div className='w-full text-center relative flex flex-col items-center'>
                <input type="text" className='bg-slate-500 text-2xl p-3 w-[80%] rounded-md focus:bg-slate-600 text-white placeholder:opacity-75 placeholder:text-center '
                    value={note}
                    onChange={(e) => { SetNote(e.target.value) }}

                    placeholder='Add The Note' />
                { note.length <= 0 &&
                    <div className='text-white bg-red-700 p-1 mt-3 text-sm w-[80%] rounded-lg'>
                        Please Enter Note To Add

                    </div>
                }

            </div>

            <div className='text-white space-x-3 w-full flex justify-center mt-4 '>
                <button className='bg-red-600 btn' onClick={hide}>Cancel</button>
                <button className='bg-green-700 btn' onClick={() => addNoteValidation(note)}>Add</button>
            </div>

            {/* import hand from '../images/hand.png' */}
         
        </div>
    )
}

export default AddNote
