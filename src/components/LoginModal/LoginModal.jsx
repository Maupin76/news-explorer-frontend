import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onSwitchToRegister, onLoginSuccess }) {
  function handleSubmit(e) {
    e.preventDefault();

    // Simulate successful login
    onLoginSuccess();
  }

  return (
    <ModalWithForm
      type="login"
      isOpen={isOpen}
      onClose={onClose}
      title="Sign in"
      submitText="Sign in"
      switchText="or"
      switchLinkText="Sign up"
      onSwitchClick={onSwitchToRegister}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input type="email" className="modal__input" required />
      </label>

      <label className="modal__label">
        Password
        <input type="password" className="modal__input" required />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
