import { useState } from 'react';
// Importamos app.css para darle estilos a nuestra app
import './app.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);
  console.log(num1, num2);

  const handleChanges1 = (event) => {
    setNum1(event.target.value);
  }
  const handleChanges2 = (e) => {
    setNum2(e.target.value);
  }
  const handleSumar = (ev) => {
    setResultado(Number(num1) + Number(num2));
  }
  const handleRestar = (ev) => {
    setResultado(Number(num1) - Number(num2));
  }
  const handleMultiplicar = (ev) => {
    setResultado(Number(num1) * Number(num2));
  }
  const handleDividir = (ev) => {
    setResultado(Number(num1) / Number(num2));
  }


  return (
    <>
      <div className="calculator">
        <h1>Calculadora</h1>
        <input
          type="number"
          name="num1"
          placeholder="Numero 1"
          value={num1}
          onChange={handleChanges1}
        />
        <input
          type="number"
          name="num2"
          placeholder="Numero 2"
          value={num2}
          onChange={handleChanges2}
        />
        <hr />
        <div className='botones'>
          <button onClick={handleSumar}>Sumar</button>
          <button onClick={handleRestar}>Restar</button>
          <button onClick={handleMultiplicar}>Multiplicar</button>
          <button onClick={handleDividir}>Dividir</button>
        </div>
        <hr />
        <h3>Resultado: {resultado}</h3>
      </div>
    </>
  )
}

export default App
