import "./ModalWithForm.css";

function ModalWithForm({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal__container">
        <button
          className="modal__close"
          type="button"
          aria-label="Close modal"
          onClick={onClose}
        />
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form">{children}</form>
      </div>
    </div>
  );
}

export default ModalWithForm;
