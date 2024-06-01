function Hello(props) {
  return (
    <>
      <h2>
        Hi, {props.person.name}. {props.person.message} {props.person.emoji}
      </h2>
    </>
  );
}

function displayMessage() {
  return "Wow!";
}
export default Hello;
