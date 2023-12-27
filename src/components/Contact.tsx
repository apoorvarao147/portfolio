import { useState } from "react";
import vg from "../assets/vg.png";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e:any) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div id="contact">
      <section>
        <form onSubmit={submitHandler}>
          <h2>Contact Me</h2>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
          <textarea
            rows={4} cols={40}
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Your message"
            required         
          />
          <button type="submit">Send</button>
        </form>
      </section>
      <aside>
        <img src={vg} />
      </aside>
    </div>
  );
}

export default Contact;
