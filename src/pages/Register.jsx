
import { useNavigate } from "react-router-dom";
import { registerschema } from "../compenents/formschema/registerschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerschema)
  });

  function onSubmit1(data) {
    console.log(data);
    alert("Register successful!");

    navigate("/", {
      state: data
    });
  }

  return (
    <div>
      <h1>Register Page</h1>

      <form onSubmit={handleSubmit(onSubmit1)}>

        <div>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>

        <div>
          <input
            type="number"
            placeholder="Enter your age"
            {...register("age", { valueAsNumber: true })}
          />
          <p>{errors.age?.message}</p>
        </div>

        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default Register;

