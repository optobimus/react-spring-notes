import { MdDeleteForever } from "react-icons/md"
import { AiFillEdit } from "react-icons/ai"

import { useState } from "react";

const Note = ({ id, title: initialTitle, text: initialText, date, handleDeleteNode }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(initialTitle);
    const [text, setText] = useState(initialText);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {

        setIsEditing(false);
    };

    return(
        <div className="note">
            { isEditing ? (
                <>
                     <div className="note-header">
                        <input className="title-input" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <button onClick={handleSaveClick}>Speichern</button>
                    </div>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} />             
                </>
            ) : (
                <>
                    <div className="note-header">
                        <h3>{title}</h3>
                        <AiFillEdit onClick={handleEditClick} className="edit-icon" size="1.25em"/>
                    </div>
                     <p>{text}</p>
                </>
            )}
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={() => handleDeleteNode(id)} className="delete-icon" size="1.25em"/>
            </div>
        </div>
    )
}

export default Note;