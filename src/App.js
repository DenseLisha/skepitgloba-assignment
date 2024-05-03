import React from "react";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App (){
  return(
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </Router>
  )
}
export default App;