import { MdDeleteForever } from "react-icons/md";
import '../styles/Note.css';

const Note = ({ id, text, date }) => {
    return (
        <div className="note" id={id}>
            <div className="note-header">
                <div class="date">{date}</div>
                <MdDeleteForever className="delete-icon" size="1em"/>
            </div>
            <span className="note-content">{text}</span>
        </div>
    );
}

export default Note;