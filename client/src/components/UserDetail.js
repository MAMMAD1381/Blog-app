import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://Blog-app.com/api/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user:', error));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>Email: {user.email}</p>
      <p>id: {user._id}</p>
    </div>
  );
};

export default UserDetail;
