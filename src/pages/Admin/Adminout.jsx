import { Link } from "react-router-dom";

function Adminout() {
    return ( 
        <div>
            <h1>home page</h1>
            <nav>
                <Link to ={"/admin/Dashboard"}>Dashboard</Link>
                <Link to ={"/admin/Settings"}>Userdetail</Link>
                <Link to ={"/admin/userdetail"}>Settings</Link>
            </nav>
            <outlet/>
        </div>
     );
}

export default Adminout;