import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
  const [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // simulate successful registration
    setIsSuccess(true);
  }

  function handleClose() {
    setIsSuccess(false);
    onClose();
  }

  return (
    <ModalWithForm
      // -  type="register"
      type={`register${isSuccess ? " modal_success" : ""}`}
      isOpen={isOpen}
      onClose={handleClose}
      title={
        isSuccess ? (
          <span className="modal__success-title">
            Registration successfully completed!
          </span>
        ) : (
          "Sign up"
        )
      }
      submitText={isSuccess ? "" : "Sign up"}
      onSubmit={isSuccess ? undefined : handleSubmit}
    >
      {isSuccess ? (
        <button
          type="button"
          className="modal__signin-link"
          onClick={() => {
            handleClose();
            onSwitchToLogin();
          }}
        >
          Sign in
        </button>
      ) : (
        <>
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
        </>
      )}
    </ModalWithForm>
  );
}

export default RegisterModal;
