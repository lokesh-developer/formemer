import React from 'react';
import HomePage from './HomePage';

export default function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

const appDiv = document.getElementById('app');
render(<App />, appDiv);
