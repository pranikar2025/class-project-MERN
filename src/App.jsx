
/*import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const Navigate = useNavigate(" ");
  const [formdata, setFormdata] = useState({
    username: "",
    password: ""
  });

  function handlechange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formdata);
    alert("login successfully")
    Navigate("/Dashboard",{
      stateformdata
    })

  }
  return (
       <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Enter Email"
          name="username"
          onChange={handlechange}/><br /><br />
      <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={handlechange}/><br /><br />
      <button type="submit">SUBMIT</button>
      </form>
      </div>
  );
}
export default App;

/*export default App;    <BrowserRouter>
      <Routes>
        <Route path = "/ " element = {<Login/>} />
        <Route path = "/projects" element = {<Projects/>} />
        <Route path = "/tasks" element = {<Tasks/>} />

      </Routes>
    </BrowserRouter>*/


/*import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/login";
import Project from "./pages/projects";
import Tasks from "./pages/tasks";*/





import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../src/pages/login';
import Tasks from './pages/tasks';
import Projects from './pages/project';
import Calender from './pages/Calender';
import Team from './pages/Team';
import Client from './pages/Client';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Register from './pages/Register';
import Adminout from "./pages/Admin/Adminout";
import AdminDashboard from "./pages/Admin/Dashboard";
import AdminSettings from "./pages/Admin/Settings";
import AdminUserdetail from "./pages/Admin/userdetail";


function App() {
  return ( 
  <BrowserRouter>
  <Routes> 
   <Route path = "/"element = {<Login/>} />
    <Route path = "/projects" element = {<Projects/>} />
    <Route path = "/tasks" element = {<Tasks/>} />
    <Route path = "/Calender" element = {<Calender/>} />
    <Route path = "/Team" element = {<Team/>} />
    <Route path = "/settings" element = {<Settings/>} />
    <Route path = "/Dashboard" element = {<Dashboard/>} />
    <Route path = "/Client" element = {<Client/>} />
    <Route path = "/Register" element ={<Register/>} />
    <Route path = "/Adminout" element ={<Adminout/>} >
      <Route path ="AdminDashboard" element = {<AdminDashboard/>}/>
      <Route path ="AdminSettings" element = {<AdminSettings/>}/>
      <Route path ="Adminuserdetail" element = {<AdminUserdetail/>}/>
      <Route path ="Adminout" element = {<Adminout/>}/>
      

    </Route>
     
    
  </Routes>
  </BrowserRouter>
  );
}
export default App;