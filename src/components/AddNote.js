import { useState } from 'react'
import "../styles/AddNote.css"

const AddNote = ({addNoteData}) => {
    const [noteText, setNoteText] = useState('');
    const charLimit = 200;

    const handleInput = (event) => {
        if(charLimit >= event.target.value.length){
            setNoteText(event.target.value);
        }
    }

    const saveNote = () => {
        if(noteText.trim() !== ''){
            addNoteData(noteText);
            setNoteText('');
        }
    }

    const enterNote = (event) => {
        if(event.key === 'Enter' && !event.shiftKey){
            event.preventDefault();
            saveNote();
        }
    }

    return (
        <div className="note-add">
            <textarea 
                placeholder="Add a note.."
                onInput={handleInput}
                value={noteText}
                onKeyDown={enterNote}>
            </textarea>
            <div class="note-add-footer">
                <span id='remaining'>
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