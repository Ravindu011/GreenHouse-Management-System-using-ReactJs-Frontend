import React, { useState, useContext } from 'react';
import axios from 'axios';
import './MainPageCSS/notebook.css';
import NavigationBar from '../Pages/Nav/NavigationBar';
import { UserContext } from '../UserContext';
const NoteBook = () => {
  const { username } = useContext(UserContext); // Use context to get the username
  const [noteTitle, setNoteTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const note = {
      noteTitle,
      userName: username, // Use the username from context
      description,
    };

    try {
      await axios.post('http://localhost:8080/addNote', note);
      setMessage('Note saved successfully!');
      // Clear the form
      setNoteTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error saving the note:', error);
      setMessage('Failed to save note. Please try again.');
    }

    // Hide message after 3 seconds
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="">
      <NavigationBar/>
      <div className="notebook">
        <h2 className="notebook-title">Note Book</h2>
        {message && <div className="message">{message}</div>}
        <form className="notebook-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="noteTitle">Note Title</label>
            <input
              type="text"
              id="noteTitle"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              id="userName"
              value={username} // Display the username from context
              readOnly // Make the input field non-editable
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="save-button">Save Note</button>
        </form>
      </div>
    </div>
  );
};

export default NoteBook;
