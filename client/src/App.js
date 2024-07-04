import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Blogs</Link></li>
          <li><Link to="/create-blog">Create Blog</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/create-user">Create User</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
};

export default App;
