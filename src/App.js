import React from 'react';
import './App.css';
import Register from './screens/Register';      
import Login from './screens/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <div>
    
    <Router>
    
    <Route  exact  path ='/' component = {Register}  />
    <Route  path ='/login' component = {Login}  />
    
    
    </Router>
    
    </div>
  );
}

export default App;
