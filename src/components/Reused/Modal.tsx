import React from "react";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";

type PropsType = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

Modal.setAppElement("#root");

const CustomModal = ({ children, open, onClose }: PropsType) => {
  return (
    <Modal isOpen={open} onRequestClose={onClose} style={customStyles}>
      <div>
        <button
          onClick={onClose}
          className="float-right w-8 h-8 rounded-full hover:bg-gray-100"
        >
          <CloseIcon />
        </button>
      </div>
      {children}
    </Modal>
  );
};

export default CustomModal;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
