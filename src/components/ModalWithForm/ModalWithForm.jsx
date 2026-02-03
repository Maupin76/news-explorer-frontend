import "./ModalWithForm.css";
import closeIcon from "../../assets/images/close.svg";

function ModalWithForm({
  isOpen,
  onClose,
  title,
  submitText,
  switchText,
  switchLinkText,
  onSwitchClick,
  children,
  onSubmit,
  type,
}) {
  if (!isOpen) return null;

  return (
    <div className={`modal modal_type_${type}`}>
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal__container">
        <button
          className="modal__close"
          type="button"
          aria-label="Close modal"
          onClick={onClose}
        >
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>
        <h2 className="modal__title">{title}</h2>

        <form className="modal__form" onSubmit={onSubmit}>
          <div className="modal__fields">{children}</div>

          <div className="modal__actions">
            {onSubmit && (
              <button type="submit" className="modal__submit">
                {submitText}
              </button>
            )}

            {switchText && (
              <p className="modal__switch">
                {switchText}{" "}
                <button
                  type="button"
                  className="modal__link"
                  onClick={onSwitchClick}
                >
                  {switchLinkText}
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
