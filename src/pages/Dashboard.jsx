import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location = useLocation();
    const[userdata, setUserdata] = useState("");
    function displaydata(){
        setUserdata(location.state);
        console.log(userdata)
    }  


    const[count,setcount]=useState(0);
    useEffect(()=>{
       console.log(userdata);
    },[]) 

    return ( 
    <div>
            <button onClick={() => setcount(count + 1)}></button>
        </div>
     );
}


export default Dashboard;