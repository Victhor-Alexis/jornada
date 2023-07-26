import logo from './dado.png';
import maguila from './maguila.png';
import jessica from './Jéssica.png';
import angelina from './Angelina.png';
import laura from './Laura.png';
import david from './David.png';
import './App.css';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState(20);
  const [selecao, setSelecao] = useState("block");
  const [max, setMax] = useState(20);
  const [plus, setPlus] = useState(1);
  const [newBtn, setNewBtn] = useState("none");

  const showBt = (perso) => {
    setSelecao("none");
    
    if (perso === 1) {
      setMax(3);
      setPlus(1);
      setNewBtn("none");
      setNumber(20);
    } else if (perso === 4) {
      setNewBtn("block");
      setPlus(1);
      setMax(20);
      setNumber(20);
    } else {
      setPlus(1);
      setMax(20);
      setNewBtn("none");
      setNumber(20);
    }
  }

  return (
    <div className="App">
        <div className="selecao" style={{display: selecao}}>
          <h2>Simulador de lances da jornada</h2>
          <h3>Selecione a personagem:</h3>

          <div className='wrapper-card'>
            <div className='card' onClick={() => showBt(1)}>
              <img src={maguila} />
            </div>
            <div className='card' onClick={() => showBt(2)}>
              <img src={jessica} />
            </div>
            <div className='card' onClick={() => showBt(3)}>
              <img src={angelina} />
            </div>
            <div className='card' onClick={() => showBt(4)}>
              <img src={laura} />
            </div>
            <div className='card' onClick={() => showBt(5)}>
              <img src={david} />
            </div>  
          </div>
        </div>

        <div className="dado-wrapper">
          <div className="dado">
            <img src={logo} className="App-logo" alt="logo" />
            <div className='number'>{number}</div>
          </div>
        </div>

        <button className='girar' onClick={() => {
          const randomNumber = Math.floor(Math.random() * max) + plus; // Adding 1 to avoid 0
          const formattedNumber = randomNumber < 10 ? `0${randomNumber}` : `${randomNumber}`;
          setNumber(formattedNumber);
        }}>
          Girar
        </button>

        <div className='novo' style={{display: newBtn}}>
          <button className="newBtn" onClick={() => {
              setPlus(50);
              setNewBtn("none");
            }
          }>
            Modo finaliza dog
          </button>
        </div>

        <div className='novo'>
          <button className='back' onClick={() => setSelecao("block")}>
            Voltar
          </button>
        </div>
    </div>
  );
}

export default App;
