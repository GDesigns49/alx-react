import notificationData from "../../dist/notifications.json";
import { normalize, schema } from "normalizr";


const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalized = normalize(notificationData, [notification]);

export function getAllNotificationsByUser(userId) {
  const output = [];
  const notifications = normalized.entities.notifications;
  const messages = normalized.entities.messages;

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      output.push(messages[notifications[id].context]);
    }
  }
  return output;
}

export function notificationsNormalizer(data) {
  return normalize(data, [notification]).entities;
}

// export const normalizedNotifications = normalize(notification.default, [notification]);
