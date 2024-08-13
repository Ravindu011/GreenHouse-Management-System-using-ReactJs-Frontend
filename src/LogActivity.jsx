// src/utils/activityLogger.js
import axios from 'axios';

// Function to log user activity
export const logActivity = async (username, taskName) => {
  if (!username) {
    console.error('Username is not available');
    return;
  }

  const activity = {
    taskName: taskName,      // Hardcoded task name
    editedUsername: username // Username from context
  };

  try {
    await axios.post('http://localhost:8080/addAct', activity);
    console.log('Activity logged successfully');
  } catch (error) {
    console.error('Error logging activity:', error);
  }
};
