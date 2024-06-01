export default function CondtionalComponent() {
  const display = true;
  if (display) {
    return (
      <div>
        <h3>This is Condtional Component</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Code Everyday!</h3>
      </div>
    );
  }
}
