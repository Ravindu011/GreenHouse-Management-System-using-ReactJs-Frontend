import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';
import NavigationBar from '../Pages/Nav/NavigationBar';
import './MainPageCSS/act.css'

const UserActivities = () => {
  const { username } = useContext(UserContext);
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch activities from the backend
    const fetchActivities = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/allAct?page=${currentPage}&size=10`);
        setActivities(response.data.content); // Adjust based on your API response
        setTotalPages(response.data.totalPages); // Adjust based on your API response
      } catch (err) {
        setError('Error fetching activities');
      }
    };

    fetchActivities();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="">
      <NavigationBar/>
      <div className="bodyContainer">
        <h2>User Activities</h2>
        {error && <p className="text-danger">{error}</p>}
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Task Name</th>
                <th>Update Date</th>
                <th>Update Time</th>
                <th>User Name</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity.id}>
                  <td>{activity.id}</td>
                  <td>{activity.taskName}</td>
                  <td>{activity.date}</td>
                  <td>{activity.time}</td>
                  <td>{activity.editedUsername}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          {currentPage > 0 && (
            <button className='back' onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
          )}
          {currentPage < totalPages - 1 && (
            <button className='next' onClick={() => handlePageChange(currentPage + 1)}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserActivities;
