import React, { useState, useContext } from "react"; // Ensure useState and useContext are imported
import axios from "axios"; // Import axios for making HTTP requests
import UserNavigationBar from "../Pages/Nav/UserNavigationBar"; // Ensure UserNavigationBar is correctly imported
import { UserContext } from "../UserContext";
export default function UserNoteBook() {
    const { username } = useContext(UserContext); // Use useContext to get username from UserContext
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
            <UserNavigationBar/>
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
}
