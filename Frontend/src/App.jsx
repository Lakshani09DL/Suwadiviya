// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import ChatInterface from './components/chatbot/ChatInterface';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/chat" element={<ChatInterface />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

