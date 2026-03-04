import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onSwitchToLogin, onRegister }) {
  const [isSuccess, setIsSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const isFormValid =
    email.trim() !== "" && password.trim() !== "" && name.trim() !== "";

  function handleSubmit(e) {
    e.preventDefault();

    onRegister(email, password, name)
      .then(() => {
        setIsSuccess(true);
      })
      .catch((err) => {
        errorLogger.error("Registration failed:", err);
      });
  }

  function handleClose() {
    setIsSuccess(false);
    onClose();
  }

  return (
    <ModalWithForm
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
      isFormValid={!isSuccess && isFormValid}
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
            <input
              type="email"
              className="modal__input"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="modal__label">
            Password
            <input
              type="password"
              className="modal__input"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <label className="modal__label">
            Name
            <input
              type="text"
              className="modal__input"
              placeholder="Enter your username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </>
      )}
    </ModalWithForm>
  );
}

export default RegisterModal;
