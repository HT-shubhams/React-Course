function Hello({ person }) {
  return (
    <>
      <h2>
        Hi, {person.name}. {person.message} {person.emoji}
      </h2>
    </>
  );
}

function displayMessage() {
  return "Wow!";
}
export default Hello;
