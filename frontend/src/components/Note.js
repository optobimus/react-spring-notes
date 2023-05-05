import { MdDeleteForever } from "react-icons/md"

const Note = ({ id, title, text, date, handleDeleteNode }) => {
    return(
        <div className="note">
            <span><h3>{title}</h3></span>
            <p>{text}</p>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={() => handleDeleteNode(id)} className="delete-icon" size="1.25em"/>
            </div>
        </div>
    )
}

export default Note;