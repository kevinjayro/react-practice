import TeamDashboard from './components/TeamDashboard';
import { teams } from './data/teams';

export default function TeamDashboardExample() {
  return <TeamDashboard teams={teams} />;
}
