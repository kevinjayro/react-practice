type NotificationMessageProps = {
  showMessage: boolean;
  message: string;
};

export default function NotificationMessage({
  showMessage,
  message,
}: NotificationMessageProps) {
  return (
    <>
      {showMessage && (
        <div>
          <p>{message}</p>
        </div>
      )}
    </>
  );
}
