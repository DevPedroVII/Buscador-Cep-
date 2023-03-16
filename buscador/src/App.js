import {useState} from 'react';
import {FiSearch} from 'react-icons/fi'
import './styles.css'
function App() {
  const [input,setinput] = useState('')

  function handleSearch(){
    alert("Test")
  }

  return (
    <div className="container">
      <h1 className="title">Buscador Cep</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite seu Cep..."
        value={input}
        onChange ={(e) => setinput(e.target.value)}
        />
        <button className = "buttonSearch" onClick={handleSearch} >
           <FiSearch size={25} color="#FFF"/> </button>
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
