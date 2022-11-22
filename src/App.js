import { useState } from "react";
import AddNote from "./components/AddNote";
import ShowNote from "./components/ShowNote";
import hand from './images/hand.png'
// AiOutlinePlusCircle
import { AiOutlineSearch, AiFillCloseCircle, AiFillDelete,AiOutlinePlusCircle } from "react-icons/ai";


function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [notes, setNotes] = useState([])

  const ChangeVisible = () => {
    setIsVisible(isVisible => !isVisible)
  }
  const addNote = (note) => {
    setNotes(notes => [...notes, { id: note, title: note, read: false }])
    // console.log(notes)
    ChangeVisible()


  }
  const delNotes = (ind) => {
    setNotes(cns => cns.filter((
      (item, index) => item.id !== ind
    )))
    // console.log
  }

  const updateNote = (index) => {
    setNotes(
      notes.map((item, ind) =>
        item.id === index
          ? { ...item, read: !item.read }
          : item
      ))


  }

  return (
    <div className="h-screen relative bg-slate-600">
      <div className={`absolute text-white z-10 w-20 top-2 flex transition-[left] duration-500 opacity-50 hover:opacity-100  ${isVisible?'left-full':'left-0'}`}
        onClick={ChangeVisible}
      >
        <img src={hand} alt="" className='invert' />
        <span className="absolute left-16 top-10 ">
          <AiOutlinePlusCircle  className="h-9 w-9"/>
        </span>
        

      </div>
      <AddNote visible={isVisible} hide={ChangeVisible} addNote={(note) => addNote(note)} />
      <ShowNote hide={ChangeVisible} notes={notes} delet={(ind) => delNotes(ind)} update={(ind) => updateNote(ind)} />
    </div>
  );
}

export default App;
