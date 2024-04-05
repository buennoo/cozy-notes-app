import { useState } from 'react'
import "../styles/AddNote.css"

const AddNote = ({addNoteData}) => {
    const [noteText, setNoteText] = useState('');
    const charLimit = 10;

    const handleInput = (event) => {
        if(charLimit > event.target.value.length){
            setNoteText(event.target.value);
        }
    }

    const saveNote = () => {
        if(noteText.trim() !== ''){
            addNoteData(noteText);
        }
        setNoteText('');
    }

    return (
        <div className="note-add">
            <textarea 
                placeholder="Add a note.."
                onInput={handleInput}
                value={noteText}>
            </textarea>
            <div class="note-add-footer">
                <span>
                    { charLimit - noteText.length }
                </span>
                <button className="note-save" onClick={ noteText.length <= 0 ? null : saveNote }>
                    Save
                </button>
            </div>
        </div>
    );
}

export default AddNote;