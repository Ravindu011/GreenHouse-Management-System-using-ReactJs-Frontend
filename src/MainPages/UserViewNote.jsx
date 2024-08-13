import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NoteList.css';
import NotePopup from '../Pages/Note popup/NotePopup';
import NavigationBar from '../Pages/Nav/NavigationBar';
import UserNavigationBar from '../Pages/Nav/UserNavigationBar';

export default function UserViewNote() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Fetch notes from the backend
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/allNote');
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="">
              <UserNavigationBar/>

      <div className="note-list-container">
      <h2>Notes</h2>
      <ul className="note-list">
        {notes.map((note) => (
          <li key={note.id} onClick={() => handleNoteClick(note)} className="note-item">
            {note.noteTitle}
          </li>
        ))}
      </ul>

      {showPopup && selectedNote && (
        <NotePopup note={selectedNote} onClose={handleClosePopup} />
      )}
    </div>

    </div>
    
  );
}
