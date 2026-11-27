function Login() {
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
export default Login;


