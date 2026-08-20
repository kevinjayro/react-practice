type UserStatusProps = {
  isOnline: boolean;
};

export default function UserStatus({ isOnline }: UserStatusProps) {
  return <p>{isOnline ? 'Online' : 'Offline'}</p>;
}
