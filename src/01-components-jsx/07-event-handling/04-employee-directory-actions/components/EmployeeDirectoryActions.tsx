import type { Employee } from '../types/employee';

type EmployeeDirectoryActionsProps = {
  employees: Employee[];
};

export default function EmployeeDirectoryActions({
  employees,
}: EmployeeDirectoryActionsProps) {
  const handleViewProfile = (id: number) => {
    console.log(`Viewing profile for employee with ID: ${id}`);
  };

  const handleContact = (name: string) => {
    console.log(`Contacting employee: ${name}`);
  };

  const handleRemove = (id: number) => {
    console.log(`Removing employee with ID: ${id}`);
  };

  return (
    <section>
      <h2>Employee Directory</h2>

      {employees.map(({ id, name, position, department }) => (
        <article key={id}>
          <h3>{name}</h3>
          <p>{position}</p>
          <p>{department}</p>

          <button onClick={() => handleViewProfile(id)}>View Profile</button>
          <button onClick={() => handleContact(name)}>Contact</button>
          <button onClick={() => handleRemove(id)}>Remove</button>
        </article>
      ))}
    </section>
  );
}
