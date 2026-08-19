import Panel from './Panel';

export default function PanelExample() {
  return (
    <Panel
      header={<h2>Account Settings</h2>}
      content={<p>Manage your account information.</p>}
      footer={<button>Save Changes</button>}
    />
  );
}
