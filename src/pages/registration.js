export default function Registration() {
  return (
    <div>
      <h2>Registration Form</h2>
      <form action="register" method="post">
        <label>Username:</label>
        <br></br>
        <input type="text" name="username"></input>
        <br></br>
        <br></br>
        <label>Email:</label>
        <br></br>
        <input type="email" name="email"></input>
        <br></br>
        <br></br>
        <label>Password:</label>
        <br></br>
        <input type="password" name="password"></input>
        <br></br>
        <br></br>
        <label>Gender:</label>
        <br></br>
        Male<input type="radio" name="gender" value="male"></input>
        Female<input type="radio" name="gender" value="female"></input>
        Other<input type="radio" name="gender" value="other"></input>
        <br></br>
        <br></br>
        <label>Role:</label>
        <br></br>
        Admin<input type="radio" name="role" value="admin"></input>
        Customer<input type="radio" name="role" value="customer"></input>
        <br></br>
        <br></br>
        <label>Address:</label>
        <br></br>
        <textarea name="address"></textarea>
        <br></br>
        <br></br>
        <input type="submit" value="SUBMIT"></input>
      </form>
    </div>
  );
}
