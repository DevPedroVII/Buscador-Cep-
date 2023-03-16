import {FiSearch} from 'react-icons/fi'
import './styles.css'
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador Cep</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite seu Cep..." />
        <button className = "buttonSearch"> <FiSearch size={25} color="#FFF"/> </button>
      </div>
      <main className='main'>
        <h2> Cep: </h2>
        <span> Rua Teste </span>
        <span> Complemento: Teste </span>
        <span> Bairro: Teste </span>
        <span> Cidade Teste - TS </span>

      </main>
    </div>
  );
}

export default App;
