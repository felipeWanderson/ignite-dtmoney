import { useState } from 'react';
import Modal from 'react-modal'
import LogoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="dt money"/>
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>

      <Modal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar nova transação</h2>
      </Modal>
    </Container>
  );
}