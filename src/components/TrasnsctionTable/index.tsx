import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de sites</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Alugel</td>
            <td className="withdrawal">-R$ 500,00</td>
            <td>Casa</td>
            <td>10/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}