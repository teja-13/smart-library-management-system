import { useState } from "react";

const Profile = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  return (
    <div className="profile-settings-content">
      <div className="profile-header">
        <h1>Profile Settings</h1>
      </div>

      <form className="profile-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Branch</label>
          <input type="text" placeholder="Enter your branch" />
        </div>

        <div className="form-group">
          <label>Roll No</label>
          <input type="text" placeholder="Enter your roll number" />
        </div>

        <div className="form-group">
          <label>Section</label>
          <input type="text" placeholder="Enter your section" />
        </div>

        <div className="form-button-group">
          <button type="button" className="btn-secondary">
            Cancel
          </button>
          <button type="button" className="btn-primary" onClick={() => setShowPasswordModal(true)}>
            Change Password
          </button>
          <button type="submit" className="btn-primary">
            Save Changes
          </button>
        </div>
      </form>

      {showPasswordModal && (
        <div className="modal-backdrop" onClick={() => setShowPasswordModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Change Password</h2>
              <button className="modal-close" onClick={() => setShowPasswordModal(false)}>×</button>
            </div>

            <form className="profile-form">
              <div className="form-group">
                <label>Current Password</label>
                <input type="password" placeholder="Enter current password" />
              </div>

              <div className="form-group">
                <label>New Password</label>
                <input type="password" placeholder="Enter new password" />
              </div>

              <div className="form-group">
                <label>Confirm New Password</label>
                <input type="password" placeholder="Confirm new password" />
              </div>

              <div className="form-button-group">
                <button type="button" className="btn-secondary" onClick={() => setShowPasswordModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;