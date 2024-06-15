import Modal from "../../../components/Modal/Modal";

export default function PostModal({ isOpen, closeModal, openModal }) {
  return (
    <Modal isOpen={isOpen} openModal={openModal} closeModal={closeModal}>
      <div className="w-full  bg-zinc-800 rounded text-white flex flex-col divide-y divide-white/10 rounded-md">
        <div className="w-full py-3 px-2 flex justify-center items-center cursor-pointer">
          Copy link
        </div>
        <div className="w-full py-3 px-2 flex justify-center items-center cursor-pointer">
          Share to
        </div>
        <div className="w-full py-3 px-2 flex justify-center items-center cursor-pointer">
          About the account
        </div>
        <div
          className="w-full py-3 px-2 flex justify-center items-center cursor-pointer text-red-500"
        >
          Cancel
        </div>
      </div>
    </Modal>
  );
}
