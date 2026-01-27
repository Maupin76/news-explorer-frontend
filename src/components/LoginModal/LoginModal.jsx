import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose }) {
  return (
    <ModalWithForm isOpen={isOpen} onClose={onClose} title="Sign in">
      <label className="modal__label modal__label-email">
        Email
        <input type="email" className="modal__input" />
      </label>

      <label className="modal__label modal__label-password">
        Password
        <input type="password" className="modal__input" />
      </label>

      <button type="submit" className="modal__submit modal__submit-login">
        Sign in
      </button>

      <p className="modal__switch modal__switch-register">
        or <span className="modal__link">Sign up</span>
      </p>
    </ModalWithForm>
  );
}

export default LoginModal;
