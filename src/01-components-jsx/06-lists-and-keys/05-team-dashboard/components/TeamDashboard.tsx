import type { Team } from '../types/team';

type TeamDashboardProps = {
  teams: Team[];
};

export default function TeamDashboard({ teams }: TeamDashboardProps) {
  return (
    <>
      {teams.map(({ id, teamName, members }) => (
        <section key={id}>
          <h2>{teamName}</h2>

          <ul>
            {members.map(({ id, name, role }) => (
              <li key={id}>
                <h3>{name}</h3>
                <p>{role}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
