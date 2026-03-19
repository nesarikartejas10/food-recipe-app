import "./Modal.css";
const Modal = ({ onClose, children }) => {
  return (
    <>
      <div className="backdrop" onClick={onClose}></div>
      <dialog className="modal" open>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
