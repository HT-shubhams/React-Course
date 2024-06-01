// function Hello({ name, message, emoji }) {
function Hello(props) {
  props.name = "Samarth"; // Modifying props are not allowed as they are immutable
  return (
    <>
      <h1>
        Hello {props.name} {props.emoji}, from a component {props.message}!
      </h1>
      {/* {displayMessage()} */}
    </>
  );
}

function displayMessage() {
  return "Wow!";
}
export default Hello;
