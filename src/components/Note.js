import { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import '../styles/Note.css';

const Note = ({ id, text, date, toDelete, posX, posY, updatePos }) => {
    const [isDragged, setIsDragged] = useState(false);
    const [position, setPosition] = useState({posX, posY});
    const [startPosition, setStartPosition] = useState({posX, posY});

    const handleMouseDown = (event) => {
        setIsDragged(true);
        // calculate difference between cursor and left upper corner
        setStartPosition({
            posX: event.clientX - position.posX,
            posY: event.clientY - position.posY
        });
    }

    const handleMouseMove = (event) => {
        if(isDragged) {
            setPosition({
                posX: event.clientX - startPosition.posX,
                posY: event.clientY - startPosition.posY
            });
        }
    }

    const handleMouseUp = () => {
        setIsDragged(false);
        updatePosition(id, position.posX, position.posY);
    }

    const updatePosition = (id, x, y) => {
        updatePos(id, x, y);
    }

    return (
        <div className="note"
        style={{position: 'absolute', cursor: isDragged ? 'grabbing' : 'grab', left: position.posX, top: position.posY }}
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