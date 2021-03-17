import { useState } from "react";
import ReactModal from "react-modal";
import { IncomeImg, OutcomeImg } from "../../assets";
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;

}
export function NewTransactionModal(
  { 
    isOpen, 
    onRequestClose 
  }:NewTransactionModalProps) {
    const [type, setType] = useState('deposit');
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
            <RadioBox 
              type="button"
              onClick={() => { setType('deposit') }}
              isActive={type === 'deposit'}
            >
              <IncomeImg/>
              <span>Entrada</span>
            </RadioBox>
            <RadioBox 
              type="button"
              onClick={() => { setType('withdraw') }}
              isActive={type === 'withdraw'}
            >
              <OutcomeImg/>
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input placeholder="Categoria"/>
          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </ReactModal>
  )
}