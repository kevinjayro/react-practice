type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
};

type EmployeeDirectoryProps = {
  employees: Employee[];
};

export default function EmployeeDirectory({
  employees,
}: EmployeeDirectoryProps) {
  return (
    <section>
      <h2>Employee Directory</h2>
      {employees.map(({ id, name, position, department, email }) => (
        <article key={id}>
          <h3>{name}</h3>
          <p>{position}</p>
          <p>{department}</p>
          <span>{email}</span>
        </article>
      ))}
    </section>
  );
}
