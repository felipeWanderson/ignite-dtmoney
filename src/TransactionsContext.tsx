import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from './services/api';

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transactions[];
  createTransaction: (transactionsInput: TransactionInput) => Promise<void>
}
interface Transactions {
  id: number;
  title: string; 
  type: string; 
  category: string;
  amount: number;
  createdAt: string; 
}

type TransactionInput = Omit<Transactions,'id' | 'createdAt'>


const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionProvider({children}:TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionsInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionsInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;
    setTransactions([
      ...transactions,
      transaction,
    ]);
  }
  return (
    <TransactionContext.Provider value={{ transactions, createTransaction}}>
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