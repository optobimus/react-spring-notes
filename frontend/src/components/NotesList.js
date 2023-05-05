import Note from "./Note";

const NotesList = ({ notes }) => {
    return(
        <div className="notes-list">
            {notes.map((note)=> <Note id={note.id} title={note.title} text={note.text} date={note.date}/>)}
        </div> 
    )
}

export default NotesList;