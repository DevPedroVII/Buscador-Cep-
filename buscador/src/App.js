import {useState} from 'react';
import {FiSearch} from 'react-icons/fi'
import './styles.css'
import api from './services/api';

function App() {
  const [input, setinput] = useState('')
  const[cep, setCep] = useState ({})

  async function handleSearch(){
    if(input === ''){
      alert ("Coloque o Cep!!!")
    }return
    try{
      const response = await api.get(`${input}/json`)
    }catch{
      alert("Cep não localizado.");
      setinput("")
    }
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
