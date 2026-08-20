export default function EmployeeDashboard() {
  const employee = {
    firstName: 'Alice',
    lastName: 'Johnson',
    position: 'Frontend Developer',
    department: 'Engineering',
    salary: 5200,
  };
  return (
    <section>
      <h1>
        {employee.firstName} {employee.lastName}
      </h1>
      <p>Position: {employee.position}</p>
      <p>Department: {employee.department}</p>
      <p>Monthly Salary: ${employee.salary.toLocaleString()}</p>
    </section>
  );
}
