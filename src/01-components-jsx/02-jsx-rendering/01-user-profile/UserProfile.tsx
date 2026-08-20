export default function UserProfile() {
  const firstName = 'Ethan';
  const lastName = 'Walker';
  const age = 25;

  return (
    <section>
      <h1>
        {firstName} {lastName}
      </h1>
      <p>Age: {age}</p>
    </section>
  );
}
