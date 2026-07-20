export default function DeveloperPortfolio() {
  const firstName = 'John';
  const lastName = 'Smith';
  const profession = 'Frontend Developer';
  const yearsOfExperience = 3;
  const technologies = ['React', 'TypeScript', 'Node.js'];
  const getGreeting = () => 'Welcome to my portfolio!';
  return (
    <main>
      <h1>{getGreeting()}</h1>
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>{profession}</p>
      <p>Experience: {yearsOfExperience} years</p>
      <p>Primary Technologies: {technologies}</p>
      <p>{`Profile: ${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</p>
    </main>
  );
}
