import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css';
import ChatInterface from './components/ChatInterface';
import BloodBank from './components/BloodBank/Home/home'
import Search from './components/BloodBank/Search/Search'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/bloodBank' element={<BloodBank/>}/>
      <Route path='/chat' element={<ChatInterface/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
/*<div className="App">
      <BloodBank/>
      <ChatInterface/>
    </div>*/