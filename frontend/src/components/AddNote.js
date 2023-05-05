import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState("");
    const [noteTitle, setNoteTitle] = useState("");
    const [characterCount, setCharacterCount] = useState(200);


    const handleChangeTitle = (e) => {
        setNoteTitle(e.target.value);
    }


    const handleChangeText = (e) => {
        const newText = e.target.value;
        const newCount = 200 - newText.length;
        
        if (newCount >= 0) {
            setNoteText(newText);
            setCharacterCount(newCount);
        }
    };
    
    const handleKeyDown = (e) => {
        if (e.key === 'Backspace' || e.key === 'Delete') {
            const newText = e.target.value;
            const newCount = 200 - newText.length;
            setCharacterCount(newCount);
        }
    };
      

    const handleClickButton = (e) => {
        if (noteText.trim().length === 0 || noteTitle.trim().length === 0) {
            alert("Titel und Text der neuen Notiz müssen ausgefüllt werden!");
        } else {
            handleAddNote(noteTitle, noteText);
            setNoteText("");
            setNoteTitle("");
        }
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
            <textarea onChange={handleChangeText} onKeyDown={handleKeyDown} value={noteText} rows="8" cols="10" placeholder="Schreibe hier den Text der neuen Notiz..."></textarea>
            <div className="note-footer">
                <small>{characterCount} übrig</small>
                <button onClick={handleClickButton} className="save">Hinzufügen</button>
            </div>
        </div>

    )
}

export default AddNote;