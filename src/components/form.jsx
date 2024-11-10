export default function Form() {
  function comparePassword() {
    console.log("changed");
  }
  return (
    <div>
      <form>
        <input type="text" />
        <br />
        <input type="text" onChange={comparePassword(e)} />
        <span className="spane" />
      </form>
    </div>
  );
}
