// App.jsx
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import ChatInterface from './components/chatbot/ChatInterface';
import BloodBank from './components/BloodBank/Home/home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/bloodBank' element={<BloodBank/>}/>
          <Route path="/chat" element={<ChatInterface />} />
          
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;

