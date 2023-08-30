import React from 'react';
import { NotificationText } from './Notification.styled';

const Notification = ({ message }) => (
  <NotificationText>{message}</NotificationText>
);

export default Notification;
