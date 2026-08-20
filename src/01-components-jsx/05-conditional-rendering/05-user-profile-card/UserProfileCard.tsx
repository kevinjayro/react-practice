type UserProfileCardProps = {
  name: string;
  role: string;
  isVerified: boolean;
  hasPremium: boolean;
};

export default function UserProfileCard({
  name,
  role,
  isVerified,
  hasPremium,
}: UserProfileCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
      {isVerified && <span>Verified Account</span>}
      {hasPremium && <span>Premium Settings</span>}
    </article>
  );
}
