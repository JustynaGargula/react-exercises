import {useState} from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setIsSubmitted(true);
  }

  const resetForm = () => {
    setName("");
    setEmail("");
    setIsSubmitted(false);
  }

  return (
    <>
      <h1>User form</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input value={name} onChange={e => (setName(e.target.value))} type="text" id="name" name="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input value={email} onChange={e => (setEmail(e.target.value))} type="email" id="email" name="email" required />
        </div>
        <button type="button" onClick={resetForm} className="resetButton">Reset</button>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <div>
        <p>Thank you for submitting the following data:</p>
        <div className="indentedParagraph">
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>

      </div>}
    </>
  )
}