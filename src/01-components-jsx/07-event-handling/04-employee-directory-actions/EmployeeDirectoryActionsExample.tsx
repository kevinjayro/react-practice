import EmployeeDirectoryActions from './components/EmployeeDirectoryActions';
import { employees } from './data/employees';

export default function EmployeeDirectoryActionsExample() {
  return <EmployeeDirectoryActions employees={employees} />;
}
