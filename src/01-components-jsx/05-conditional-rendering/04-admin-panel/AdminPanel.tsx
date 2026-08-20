type AdminPanelProps = {
  isAdmin: boolean;
};

export default function AdminPanel({ isAdmin }: AdminPanelProps) {
  if (!isAdmin) {
    return <p>Access Denied</p>;
  }
  return (
    <section>
      <h2>Admin Panel</h2>
      <button>Manage Users</button>
    </section>
  );
}
