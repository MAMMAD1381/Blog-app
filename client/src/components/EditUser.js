import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://Blog-app.com/api/users/${id}`)
      .then(response => {
        setUsername(response.data.username);
        setEmail(response.data.email);
      })
      .catch(error => console.error('Error fetching user:', error));
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://Blog-app.com/api/users/${id}`, { username, email });
      navigate(`/users/${id}`);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUser;
