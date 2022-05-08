import "./modal.css";

export const Modal = ({ children, toggleModal, modalClass }) => {
  const closeModal = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      toggleModal(false);
    }
  };
  return (
    <div
      className={`${
        modalClass ? modalClass : "modal-backdrop"
      } flex ai-center jc-center`}
      onClick={(e) => closeModal(e)}>
      {children}
    </div>
  );
};
