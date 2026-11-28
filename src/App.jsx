
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









import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Projects from "./pages/project";
import Tasks from "./pages/tasks";
import Team from "./pages/Team";
import Clients from "./pages/Client";
import Dashboard from "./pages/Dashboard";
import Calender from "./pages/Calender";
import Settings from "./pages/Settings";
import Register from "./pages/Register";

// Admin imports
import AdminDashboard from "./pages/Admin/dashboard";
import AdminSettings from "./pages/Admin/settings";
import AdminUserDetails from "./pages/Admin/userDetail";
import AdminLayout from "./pages/Admin/adminlayout";

function App() {
  return ( 
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path = '/tasks' element={<Tasks/>}/>
        <Route path='/Team' element={<Team/>}/>
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
