import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  //   function handleChange(e) {
  //     console.log(e.target.value);
  //     setName(e.target.value);
  //   }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div>
      <div>
        {" "}
        <form>
          <input
            onChange={(e) => {
              // handleChange(e);
              setName({ ...name, firstName: e.target.value });
            }}
            type="text"
            value={name.firstName}
            placeholder="First Name"
          />
          <input
            type="text"
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
            value={name.lastName}
            placeholder="Last Name"
          />
          <br />
          <button onClick={(e) => handleSubmit(e)}>Add</button>
        </form>
      </div>
      <div>
        Your Name is: {name.firstName} {name.lastName}
      </div>
    </div>
  );
}
