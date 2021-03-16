import ReactModal from "react-modal";
import { IncomeImg, OutcomeImg } from "../../assets";
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer } from "./styles";

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
          <TransactionTypeContainer>
            <button type="button">
              <IncomeImg/>
              <span>Entrada</span>
            </button>
            <button type="button">
              <OutcomeImg/>
              <span>Saída</span>
            </button>
          </TransactionTypeContainer>
          <input placeholder="Categoria"/>
          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </ReactModal>
  )
}