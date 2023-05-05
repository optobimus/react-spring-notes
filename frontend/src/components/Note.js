import { MdDeleteForever } from "react-icons/md"

const Note = () => {
    return(
        <div className="note">
            <span><h3>First Node</h3></span>

            <div className="note-footer">
                <small>xx/xx/xxxx</small>
                <MdDeleteForever className="delete-icon" size="1.25em"/>
            </div>
        </div>
    )
}

export default Note;