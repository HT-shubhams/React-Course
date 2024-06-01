export default function Message() {
  function handleClick() {
    alert("button is clicked!");
  }
  return (
    <div>
      <button onClick={handleClick}>Click Here!</button>
    </div>
  );
}
