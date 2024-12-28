import Modal from "react-modal";
import { styles, overlay } from "../../modalStyles/modalStyles";
import ConfirmForm from "../ConfirmForm/ConfirmForm";
import { FC } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface IModalsProps {
  type: string;
  width: string;
  height?: string;
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  confirm: boolean;
  component?: React.ReactNode;
}

const Modals: FC<IModalsProps> = ({
  width,
  id,
  isOpen,
  onClose,
  confirm,
  height,
  component,
  type,
}) => {
  return (
    <Modal
      style={{
        content: {
          width: `${width}`,
          height: `${height}`,
          position: "relative",
          ...styles,
        },
        overlay,
      }}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <button onClick={onClose} className="absolute right-7 top-7 ">
        <IoCloseOutline className="w-8 h-8" />
      </button>

      {confirm ? (
        <ConfirmForm toggleForm={onClose} type={type} opportunityId={id} />
      ) : (
        component
      )}
    </Modal>
  );
};

export default Modals;
