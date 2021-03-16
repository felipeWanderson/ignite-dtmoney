import ReactModal from "react-modal";
import closeImg from '../../assets/close.svg';
import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;

}
export function NewTransactionModal({ isOpen, onRequestClose }:NewTransactionModalProps) {
  return (
    <ReactModal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container>
          <button 
            type="button" 
            className="react-modal-close" 
            onClick={onRequestClose}
          >
            <img src={closeImg} alt="Fechar Modal" />  
          </button>  
          <h2>Cadastrar nova transação</h2>
          <input placeholder="Título"/>
          <input type="number" placeholder="Valor"/>
          <input placeholder="Categoria"/>
          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </ReactModal>
  )
}