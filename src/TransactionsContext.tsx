import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from './services/api';

interface TransactionProviderProps {
  children: ReactNode;
}

interface Transactions {
  id: number;
  title: string; 
  type: string; 
  category: string;
  amount: number;
  createdAt: string; 
}

const TransactionContext = createContext<Transactions[]>([]);

export function TransactionProvider({children}:TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions));
  }, []);
  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  ); 
}

export function useTransaction() {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error('useTransaction só pode ser usado com o TransactionProvider');
  }

  return context;
}