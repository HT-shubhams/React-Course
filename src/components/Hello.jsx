function Hello({ name, message }) {
  return (
    <>
      <h1>
        Hello {name}, from a component {message}!
      </h1>
      {/* {displayMessage()} */}
    </>
  );
}

function displayMessage() {
  return "Wow!";
}
export default Hello;
