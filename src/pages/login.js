export default function LOGIN() {
  return (
    <div>
      <form action="validate" method="post">
        <h2>USER LOGIN:</h2>

        <label>Email:</label>
        <br></br>
        <input type="email" name="email"></input>
        <br></br>

        <label>Password:</label>
        <br></br>
        <input type="password" name="password"></input>

        <input type="submit" value="LOGIN"></input>
        <br></br>
        <br></br>
        <button>LOGOUT</button>
      </form>
    </div>
  );
}
