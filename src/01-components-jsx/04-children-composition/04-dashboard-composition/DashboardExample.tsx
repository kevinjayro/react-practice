import Dashboard from './components/Dashboard';
import DashboardActions from './components/DashboardActions';
import DashboardHeader from './components/DashboardHeader';
import DashboardStats from './components/DashboardStats';

export default function DashboardExample() {
  return (
    <Dashboard>
      <DashboardHeader>Sales Dashboard</DashboardHeader>

      <DashboardStats>Total Sales: $12000</DashboardStats>

      <DashboardActions>Export Report</DashboardActions>
    </Dashboard>
  );
}
