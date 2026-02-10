import Modal from "@/components/common/Modal";
import { useCustomModalStore } from "@/store";

export default function ModalProvider() {
    // const { modals, closeModal } = useModalStore();
    const { modals } = useCustomModalStore();
    return (
        <>
            {/* {modals.map((Modal, index) => <Modal key={index} onClose={() => closeModal(index)} />)} */}
            {modals.map(({ id, content }) => (
                <Modal key={id}>{content(id)}</Modal>
            ))}
        </>)
}