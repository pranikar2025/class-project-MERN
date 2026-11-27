
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
import Login from "../src/pages/login";
import Projects from '../src/pages/projects';
import Tasks from '../src/pages/tasks';
import Team from '../src/pages/team';
import Client from '../src/pages/clients';
import Dashboard from '../src/pages/dashboard';
import Calender from '../src/pages/calender';
import Settings from '../src/pages/settings';
import Clients from "../src/pages/clients";
import Register from "../src/pages/register";
import AdminDashboard from "./pages/Admin/dashboard";
import AdminSettings from "./pages/Admin/settings.jsx";
import AdminUserDetails from "./pages/Admin/userDetails";
import AdminLayout from "./pages/Admin/adminlayout";
function App() {
  return ( 
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path = '/tasks' element={<Tasks/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/calender' element={<Calender/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin' element={<AdminLayout/>}>
           
           <Route path='admindashboard' element={<AdminDashboard/>}/>
           <Route path='settings' element={<AdminSettings/>}/>
           <Route path='userdetails' element={<AdminUserDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   );
}
export default App;
