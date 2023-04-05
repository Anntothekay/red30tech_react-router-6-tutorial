import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const nagigate = useNavigate();
  const emailRef = useRef(null);
  const nameRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    nagigate("/confirmed", {
      state: { email: emailRef.current.value, name: nameRef.current.value },
    });
  }

  return (
    <div className="container">
      <h1>Register for Red30 Tech</h1>
      <p>
        Make sure to grab your spot for this year's conference! We love
        technology and consistently work towards being the premier provider of
        technology solutions and events that connect the world.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input required id="name" type="text" name="name" ref={nameRef} />
        </label>
        <label htmlFor="email">
          Email:
          <input required id="email" type="email" name="email" ref={emailRef} />
        </label>{" "}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
