function Hello(props) {
  return (
    <>
      <h1>
        Hello {props.name}, from a component {props.message}!
      </h1>
      {/* {displayMessage()} */}
    </>
  );
}

function displayMessage() {
  return "Wow!";
}
export default Hello;
