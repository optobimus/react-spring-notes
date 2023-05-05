import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState("");
    const [noteTitle, setNoteTitle] = useState("");

    const handleChangeTitle = (e) => {
        setNoteTitle(e.target.value);
    }

    const handleChangeText = (e) => {
        setNoteText(e.target.value);
    }

    const handleClickButton = (e) => {
        handleAddNote(noteTitle, noteText);
        setNoteText("");
        setNoteTitle("");
    }

    return(
        <div className="note new">
            <textarea
                className="add-title" 
                onChange={handleChangeTitle} 
                value={noteTitle}
                cols="10"
                placeholder="Titel der neuen Notiz">
                </textarea>
            <textarea onChange={handleChangeText} value={noteText} rows="8" cols="10" placeholder="Schreibe hier den Text der neuen Notiz..."></textarea>
            <div className="note-footer">
                <small>200 übrig</small>
                <button onClick={handleClickButton} className="save">Hinzufügen</button>
            </div>
        </div>

    )
}

export default AddNote;