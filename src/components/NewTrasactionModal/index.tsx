import ReactModal from "react-modal";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;

}
export function NewTransactionModal({ isOpen, onRequestClose }:NewTransactionModalProps) {
  return (
    <ReactModal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <h2>Cadastrar nova transação</h2>
      </ReactModal>
  )
}