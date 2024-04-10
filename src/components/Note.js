import { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import '../styles/Note.css';

const Note = ({ id, text, date, toDelete }) => {
    const [isDragged, setIsDragged] = useState(false);
    const [position, setPosition] = useState({x:0, y:0});
    const [startPosition, setStartPosition] = useState({x:0, y:0});

    const handleMouseDown = (event) => {
        setIsDragged(true);
        // calculate difference between cursor and left upper corner
        setStartPosition({
            x: event.clientX - position.x,
            y: event.clientY - position.y
        });
    }

    const handleMouseMove = (event) => {
        if(isDragged) {
            setPosition({
                x: event.clientX - startPosition.x,
                y: event.clientY - startPosition.y
            });
        }
    }

    const handleMouseUp = () => {
        setIsDragged(false);
    }

    return (
        <div className="note"
        style={{position: 'absolute', cursor: isDragged ? 'grabbing' : 'grab', left: position.x, top: position.y }}
        id={id}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}>
            <div className="note-header">
                <div class="date">{date}</div>
                <MdDeleteForever className="delete-icon" size="1em" onClick={ () => toDelete(id) }/>
            </div>
            <span className="note-content">{text}</span>
        </div>
    );
}

export default Note;