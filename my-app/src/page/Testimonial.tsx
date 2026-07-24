import { useState } from "react";

export default function Testimonial() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form>
      <label>
        Name: <input type="text" value={name}onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label>
        Message: <textarea value={message} onChange={(e) => setMessage(e.target.value)}/>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
