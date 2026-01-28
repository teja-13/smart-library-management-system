import { useState } from "react";

const Notifications = () => {
  const [settings, setSettings] = useState({
    enabled: true,
    emailReminders: true,
    dueReminders: true,
    fineAlerts: true,
  });

  const handleChange = (key: string) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  return (
    <div className="notifications-settings-content">
      <div className="notifications-header">
        <h1>Notifications</h1>
      </div>

      <div className="notification-setting">
        <label>
          <input
            type="checkbox"
            checked={settings.enabled}
            onChange={() => handleChange("enabled")}
          />
          Enable All Notifications
        </label>
      </div>

      <div className="notification-setting">
        <label>
          <input
            type="checkbox"
            checked={settings.emailReminders}
            onChange={() => handleChange("emailReminders")}
          />
          Email Reminders
        </label>
      </div>

      <div className="notification-setting">
        <label>
          <input
            type="checkbox"
            checked={settings.dueReminders}
            onChange={() => handleChange("dueReminders")}
          />
          Due Date Reminders
        </label>
      </div>

      <div className="notification-setting">
        <label>
          <input
            type="checkbox"
            checked={settings.fineAlerts}
            onChange={() => handleChange("fineAlerts")}
          />
          Fine Alerts
        </label>
      </div>
    </div>
  );
};

export default Notifications;