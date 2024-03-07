import { useState } from "react";
import vg from "../assets/vg.png";
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName("")
    setEmail("")
    setMessage("")

    try {
      if (name && email && message) {
        let body = {
          name: name,
          email: email,
          message: message,
        };
        let sendMessage = await fetch("https://api.apoorvarao.com/contact", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        });

        if (sendMessage.status === 200) {
          toast.success("Message sent successfully!");
        }
        sendMessage = await sendMessage.json();
      } else {
        toast.error("All fields are required")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="contact">
      <section>
        <form onSubmit={handleSubmit}>
          <h2>Contact Me</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
          <textarea
            rows={4}
            cols={40}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            required
          />
          <button type="submit">Send</button>
          <Toaster />
        </form>
      </section>
      <aside>
        <img src={vg} alt="hello" />
      </aside>
    </div>
  );
}

export default Contact;
