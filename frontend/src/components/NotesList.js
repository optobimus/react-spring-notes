import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, handleAddNote }) => {
    return(
        <div className="notes-list">
            {notes.map((note)=> <Note id={note.id} title={note.title} text={note.text} date={note.date}/>)}
            <AddNote handleAddNote={handleAddNote} />
        </div> 
    )
}

export default NotesList;