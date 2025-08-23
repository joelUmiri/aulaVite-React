import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';


function App() {
  const [numero, setNumero] = useState()
  const [NumeroEmReais, setNumeroEmReais] = useState("");

  const converterNumerosEmReais = (valorNumero) => {
    setNumeroEmReais("R$ " + valorNumero)
  }

  useEffect ( () => {converterNumerosEmReais(numero)}, [numero]);

  const salvarNumero = (valorNumero) => {
    setNumero(valorNumero)
  }

  return (
    <div>
      <input 
        type="number" 
        name="valor"
        value={numero}
        onChange={(evento) => salvarNumero(evento.target.value)}
      />
      <div>
        Valor recebido: {numero}
      </div>
      <div>
      Valor em reais: {NumeroEmReais}
      </div>
    </div>
  )
}

export default App
