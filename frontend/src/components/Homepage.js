import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function HomePage() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<p>This is the home page</p>} />
        <Route exact path="/lokesh" element={<p>This is the lokesh page</p>} />
      </Routes>
    </Router>
  );
}
