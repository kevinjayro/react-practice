import { useState, type SubmitEvent } from 'react';

export default function NewsletterSignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email });
    setName('');
    setEmail('');
  };
  return (
    <section>
      <h2>Newsletter Signup</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>

        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}
