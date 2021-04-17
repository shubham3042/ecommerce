import React from 'react';
import Sidebar from './Component/Sidebar/Sidebar';
import Navbar from './Component/Navbar/Navbar';
import './assets/css/demo.css';
import './assets/css/bootstrap.min.css';
import './assets/css/light-bootstrap-dashboard.css';
function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <Navbar />
    </div>
  );
}

export default App;
