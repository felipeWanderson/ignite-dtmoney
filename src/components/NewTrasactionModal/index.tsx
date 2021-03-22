import { FormEvent, useState } from "react";
import ReactModal from "react-modal";
import { IncomeImg, OutcomeImg } from "../../assets";
import closeImg from '../../assets/close.svg';
import { useTransaction } from "../../TransactionsContext";
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
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');
    const {createTransaction} = useTransaction();

    async function handleCreateNewTransction(event: FormEvent) {
      event.preventDefault();

      await createTransaction({
        title,
        category,
        type,
        amount,
      });

      setAmount(0);
      setCategory('');
      setTitle('');
      setType('deposit');

      onRequestClose();
    }
  return (
    <ReactModal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container onSubmit={handleCreateNewTransction}>
          <button 
            type="button" 
            className="react-modal-close" 
            onClick={onRequestClose}
          >
            <img src={closeImg} alt="Fechar Modal" />  
          </button>  
          <h2>Cadastrar nova transação</h2>
          <input 
            placeholder="Título" 
            value={title}
            onChange={event => setTitle(event.target.value)} 
          />
          <input 
            type="number" 
            placeholder="Valor"
            value={amount}
            onChange={event => setAmount(Number(event.target.value))} 
          />
          <TransactionTypeContainer>
            <RadioBox 
              type="button"
              onClick={() => { setType('deposit') }}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <IncomeImg/>
              <span>Entrada</span>
            </RadioBox>
            <RadioBox 
              type="button"
              onClick={() => { setType('withdraw') }}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <OutcomeImg/>
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input 
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)} 
          />
          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </ReactModal>
  )
}