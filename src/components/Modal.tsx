const Modal = ({ onClose, children }) => {
  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button
          className="modal-close"
          onClick={handleClose}
          title="Close Modal"
        >
          ❌
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
