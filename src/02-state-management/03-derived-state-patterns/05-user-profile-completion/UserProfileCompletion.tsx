import { useState } from 'react';
import { initialProfile } from './UserProfileCompletion.data';
import type { Profile } from './UserProfileCompletion.types';

export default function UserProfileCompletion() {
  const [profile, setProfile] = useState<Profile>(initialProfile);

  const fields = [
    { name: 'First name', complete: Boolean(profile.firstName.trim()) },
    { name: 'Last name', complete: Boolean(profile.lastName.trim()) },
    { name: 'Email', complete: Boolean(profile.email.trim()) },
    { name: 'Phone', complete: Boolean(profile.phone.trim()) },
    { name: 'Bio', complete: Boolean(profile.bio.trim()) },
  ];

  const missingFields = fields
    .filter((field) => !field.complete)
    .map((field) => field.name);

  const completedFields = fields.reduce(
    (count, item) => (item.complete ? count + 1 : count),
    0,
  );

  const completionPercentage = (completedFields / fields.length) * 100;

  const isComplete = fields.every((field) => field.complete);

  return (
    <section>
      <h2>Profile Completion</h2>

      <p>
        Completed fields: {completedFields} / {fields.length}
      </p>
      <p>Profile completion: {completionPercentage}%</p>

      <h3>Missing fields</h3>

      <ul>
        {missingFields.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <form>
        <label>
          First name
          <input
            type="text"
            value={profile.firstName}
            onChange={(e) => {
              setProfile((prev) => ({ ...prev, firstName: e.target.value }));
            }}
          />
        </label>

        <label>
          Last name
          <input
            type="text"
            value={profile.lastName}
            onChange={(e) => {
              setProfile((prev) => ({ ...prev, lastName: e.target.value }));
            }}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={profile.email}
            onChange={(e) => {
              setProfile((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
        </label>

        <label>
          Phone
          <input
            type="tel"
            value={profile.phone}
            onChange={(e) => {
              setProfile((prev) => ({ ...prev, phone: e.target.value }));
            }}
          />
        </label>

        <label>
          Bio
          <textarea
            value={profile.bio}
            onChange={(e) => {
              setProfile((prev) => ({ ...prev, bio: e.target.value }));
            }}
          ></textarea>
        </label>

        <button disabled={!isComplete}>Save Profile</button>
      </form>
    </section>
  );
}
