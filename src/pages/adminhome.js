export default function Adminhome() {
  return (
    <div>
      <p>ADMIN HOME</p>

      <form action="newsong">
        <input type="submit" value="ADD SONGS"></input>
      </form>
      <br></br>
      <br></br>

      <form action="viewsongs">
        <input type="submit" value="VIEW SONGS"></input>
      </form>

      <br></br>
      <br></br>
      <form action="createplaylists">
        <input type="submit" value="CREATE PLAYLIST"></input>
      </form>
      <br></br>
      <br></br>
      <form action="viewplaylists">
        <input type="submit" value="VIEW PLAYLIST"></input>
      </form>
    </div>
  );
}
