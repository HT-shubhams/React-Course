export default function CondtionalComponent() {
  /*
  //////////// This is not suggested as React component should have only one return statement.
  let messageOne = <h1>This is message One!</h1>;
  let messageTwo = <h1>This is message Two!</h1>;
  const display = true;

  if (display) return messageOne;
  else return messageTwo;
  */

  let message;
  const display = false;

  if (display) message = <h1>This is message One!</h1>;
  else message = <h1>This is message Two!</h1>;

  return message;
}
