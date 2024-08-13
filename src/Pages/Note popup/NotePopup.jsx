import React from 'react';
import './NotePopup.css';

const NotePopup = ({ note, onClose }) => {
  // Format the date to a readable format (optional)
  const formattedDate = new Date(note.day).toLocaleDateString();

  return (
    <div className="note-popup-overlay">
      <div className="note-popup">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{note.noteTitle}</h2>
        <p><strong>User:</strong> {note.userName}</p>
        <p><strong>Date:</strong> {formattedDate}</p>
        <p><strong>Description:</strong></p>
        <p>{note.description}</p>
      </div>
    </div>
  );
};

export default NotePopup;
