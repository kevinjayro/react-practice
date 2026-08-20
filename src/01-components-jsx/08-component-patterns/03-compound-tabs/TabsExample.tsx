import Tabs from './Tabs';

export default function TabsExample() {
  return (
    <Tabs defaultValue="profile">
      <Tabs.List>
        <Tabs.Tab value="profile">Profile</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="profile">
        <p>Profile information</p>
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        <p>Account settings</p>
      </Tabs.Panel>
    </Tabs>
  );
}
