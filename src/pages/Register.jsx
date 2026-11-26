import { useNavigate } from "react-router-dom";
import { registerschema } from "../compenents/formschema/registerschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { success, useForm} from "react-hook-form";





function Register(){
    const navigate=useNavigate();
    const {register, handleSubmit,formState:{errors}} = useForm({
        resolver:zodResolver(registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("register sucess")
        navigate("/")
    }
    return (

         <div>
      <form onSubmit={handleSubmit(onSubmit1)}>
      <input
        type="text" placeholder="Enter your name"
        {...register("name")}
      />
     <p>{errors.name?.message}</p>
     <input
        type="email" placeholder="Enter your email"
        {...register("email")}
      />
     <p>{errors.email?.message}</p>
     <input
        type="password" placeholder="Enter your password"
        {...register("password")}
      />
     <p>{errors.password?.message}</p>
     <input
        type="age" placeholder="Enter your age"
        {...register("age")}
      />
     <p>{errors.age?.message}</p>
     <button type="submit">submit</button>
      </form>
    </div>
   
    )
}
export default Register;