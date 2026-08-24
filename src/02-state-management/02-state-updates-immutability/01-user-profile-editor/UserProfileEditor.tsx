import { useState } from 'react';
import { user } from './data';

export default function UserProfileEditor() {
  const [profile, setProfile] = useState(user);

  const handleChangeName = (newName: string) => {
    setProfile({ ...profile, name: newName });
  };

  const handleChangeAge = () => {
    setProfile({ ...profile, age: profile.age + 1 });
  };

  const handleChangeRole = (newRole: string) => {
    setProfile({ ...profile, role: newRole });
  };

  return (
    <section>
      <h2>User Profile</h2>

      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>Role: {profile.role}</p>

      <button onClick={() => handleChangeName('Bruno')}>Change Name</button>

      <button onClick={handleChangeAge}>Increase Age</button>

      <button onClick={() => handleChangeRole('Designer')}>Change Role</button>
    </section>
  );
}
