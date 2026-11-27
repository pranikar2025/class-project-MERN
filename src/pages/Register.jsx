
/*import { useNavigate } from "react-router-dom";
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
          <input type="email" placeholder="Enter your email"
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

export default Register;*/



function Register() {

  function handleSubmit(e) {
    e.preventDefault();
    alert("Registration Successful!");
  }

  return (
    <div className="container">

      <style>{`
        * {
          box-sizing: border-box;
        }

        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          font-family: Arial, sans-serif;
        }

        .register-box {
          width: 380px;
          padding: 30px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        }

        .register-box h1 {
          text-align: center;
          color: #333;
          margin-bottom: 25px;
        }

        .register-box label {
          display: block;
          margin-bottom: 7px;
          font-weight: bold;
        }

        .register-box input {
          width: 100%;
          padding: 12px;
          margin-bottom: 18px;
          border: 1px solid #ccc;
          border-radius: 6px;
        }

        .register-box button {
          width: 100%;
          padding: 12px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
        }

        .register-box button:hover {
          background: #5145cd;
        }
      `}</style>

      <div className="register-box">

        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>

          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />

          <label>Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            min="1"
            required
          />

          <button type="submit">Submit</button>

        </form>

      </div>
    </div>
  );
}

export default Register;
