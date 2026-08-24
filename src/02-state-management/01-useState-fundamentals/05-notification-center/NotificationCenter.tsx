import { useState } from 'react';

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState(0);
  const handleChange = (count: number) => {
    setNotifications((prev) => (prev + count >= 0 ? prev + count : prev));
  };

  const handleReset = () => {
    setNotifications(0);
  };
  return (
    <section>
      <h2>Notifications</h2>

      <p>Unread notifications: {notifications}</p>

      <button
        onClick={() => {
          handleChange(+1);
        }}
      >
        New Notification
      </button>
      <button
        onClick={() => {
          handleChange(-1);
        }}
      >
        Mark One as Read
      </button>
      <button onClick={handleReset}>Mark All as Read</button>
    </section>
  );
}
