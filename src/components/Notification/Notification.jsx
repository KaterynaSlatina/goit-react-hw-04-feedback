import './Notification.module.css';

export const Notification = ({ message }) => {
  return message && <p>{message}</p>;
};
