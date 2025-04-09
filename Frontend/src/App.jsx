import React from 'react';
import Login from './components/Login/login';
import Register from './components/Register/register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div> 
  );
}

export default App;