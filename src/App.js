import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AddPost, FullPost, Home, Login, Registration } from './pages/index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addpost" element={<AddPost />} />
      <Route path="/post/:id" element={<FullPost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
