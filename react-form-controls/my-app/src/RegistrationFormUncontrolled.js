export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Username">Username:</label>
      <input type="text" id="username" name="username"></input>

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />

      <button type="submit">Sign Up</button>
    </form>
  );
}
