{/* function App() {
  function handleEmail(e) {
    console.log(e.target.value);
  }
  function handlePassword(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="email" placeholder="Enter Email"
        onChange={handleEmail}
      />
      <br /><br />
      <input
        type="password" placeholder="Enter Password"
        onChange={handlePassword}
      />
      <br /><br />
      <button type="submit">Login</button>
    </div>
  );
}
export default App;*/}

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/login";
import Project from "./pages/projects";
import Tasks from "./pages/tasks";

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path = "/ " element = {<Login/>} />
        <Route path = "/project" element = {<Projects/>} />
        <Route path = "/tasks" element = {<Tasks/>} />

      </Routes>
    </BrowserRouter>
   );
}
export default Login;