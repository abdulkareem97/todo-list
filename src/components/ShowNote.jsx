import React, { useEffect, useState } from 'react'
import { AiOutlineSearch, AiFillCloseCircle, AiFillDelete } from "react-icons/ai";
import hand from '../images/hand.png'


const ShowNote = ({ hide, notes, delet, update }) => {


    const [btnActive, SetbtnActive] = useState('all')
    const [displayNotes, setDisplayNotes] = useState([...notes])
    const [SearchInput, setSearchInput] = useState('')

    useEffect(() => {

        setDisplayNotes([...notes])
        // if (btnActive == 'all') {
        //     setDisplayNotes([...notes])
        // }
        // else
        //     if (btnActive == 'read') {
        //         const readNote = notes.filter((v) => v.read == true)
        //         setDisplayNotes(readNote)
        //         // console.log(readNote)
        //     }
        //     else {
        //         const readNote = notes.filter((v) => v.read == false)
        //         setDisplayNotes(readNote)

        // }

        checkNotesToShow(btnActive)
    }, [notes])

    useEffect(() => {
        SetbtnActive('all')
        const searchNote = notes.filter((v) => (v.title.includes(SearchInput)))
        setDisplayNotes(searchNote)
    }, [SearchInput])

    const checkNotesToShow = (value) => {

        if (value == 'all') {
            setDisplayNotes([...notes])
        }
        else
            if (value == 'read') {
                const readNote = notes.filter((v) => v.read == true)
                setDisplayNotes(readNote)
                // console.log(readNote)
            }
            else {
                const readNote = notes.filter((v) => v.read == false)
                setDisplayNotes(readNote)
            }
          

    }






    const displayNoteChange = (event) => {
        const value = event.target.name
        SetbtnActive(event.target.name)
        // console.log(event.target.name)
        // if(value=='all')
        // {
        //     setDisplayNotes([...notes])
        // }
        // else 
        // if(value=='read')
        // {
        //     const readNote = notes.filter((v)=>v.read==true)
        //     setDisplayNotes(readNote)
        //     // console.log(readNote)
        // }
        // else{
        //     const readNote = notes.filter((v)=>v.read==false)
        //     setDisplayNotes(readNote)
        // }
        checkNotesToShow(value)



    }



    const handleCheckBoxChange = (event, ind) => {

        update(ind)
        // console.log(ind)

        // if (event.target.checked) {
        //     console.log('✅ Checkbox is checked');
        // } else {
        //     console.log('⛔️ Checkbox is NOT checked');
        // }
        // setIsSubscribed(current => !current);
    };

    const searchNotes = (e) => {
        const value = e.target.value
        setSearchInput(value)
        console.log(value);


    }

    // const delet = (ind) =>{

    // }
    return (


        <div className='flex items-center flex-col pt-20 bg-slate-600'>
            <div className='text-white text-3xl pb-3 '>
                <span className='underline'>

                    AK Notes
                </span>
            </div>

            <div className='flex form-control text-white bg-slate-400 space-x-2 items-center mx-5 text-lg p-3 rounded-2xl border focus:border-cyan-900 shadow-md'

            >
                <AiOutlineSearch />

                <input type="text" className='bg-slate-400 w-full outline-none placeholder:text-gray-200'
                    placeholder='Search Note' value={SearchInput} onChange={searchNotes} />
                <AiFillCloseCircle className='hover:text-red-500' onClick={()=>setSearchInput('')} />

            </div>



            <div className='grid grid-cols-3 w-full text-white p-2 shadow-md '>
                <button name='all' className={`nbtn ${btnActive == 'all' ? 'bg-blue-700' : ''} `}
                    onClick={(e) => displayNoteChange(e)}

                >
                    All
                </button>
                <button name='read' className={`nbtn  ${btnActive == 'read' ? 'bg-blue-700' : ''}  `}
                    onClick={(e) => displayNoteChange(e)}

                >
                    Read
                </button>
                <button name='unread' className={`nbtn   ${btnActive == 'unread' ? 'bg-blue-700' : ''}  `}
                    onClick={(e) => displayNoteChange(e)}

                >
                    UnRead
                </button>
            </div>
            <div className="w-full flex flex-col items-center">
                {displayNotes.length == 0 &&
                    <div className='text-white m-4 text-3xl border border-gray-900 p-4'>
                        <span>

                            No Notes
                        </span>
                    </div>
                }

                {
                    displayNotes.map((v, i) => {
                        return (
                            <div key={i} className="bg-slate-100 w-[80%] p-3 my-3 flex  items-center space-x-3 ">
                                <input type="checkbox" name="" id="" onChange={(e) => handleCheckBoxChange(e, v.id)}
                                    checked={v.read}
                                />
                                <span className={`flex-1 ${v.read ? 'line-through' : ''}`}>
                                    {v.title}
                                </span>
                                <button className='text-rose-500' onClick={() => delet(v.id)}>
                                    <AiFillDelete />
                                </button>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default ShowNote
