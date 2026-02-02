import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <ModalWithForm
      type="register"
      isOpen={isOpen}
      onClose={onClose}
      title="Sign up"
      submitText="Sign up"
      switchText="or"
      switchLinkText="Sign in"
      onSwitchClick={onSwitchToLogin}
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

      <label className="modal__label">
        Name
        <input type="text" className="modal__input" required />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
