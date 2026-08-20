import EmployeeDirectory from './EmployeeDirectory';

const employeeList = [
  {
    id: 1,
    name: 'Michael Carter',
    position: 'Project Manager',
    department: 'Management Department',
    email: 'michael@example.com',
  },
  {
    id: 2,
    name: 'Emily Parker',
    position: 'UX Designer',
    department: 'Design Department',
    email: 'emily@example.com',
  },
];

export default function EmployeeDirectoryExample() {
  return <EmployeeDirectory employees={employeeList} />;
}
