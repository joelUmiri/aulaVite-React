import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { Produto } from './componentes/Produto';


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
      <Produto nome="Mesa" preco="100"/>
      <Produto nome="Tênis" preco="80"/>
      <Produto nome="JEEP" preco="160000"/>
      <Produto nome="Vacalo" preco="32000"/>
      <Produto nome="Doritos" preco="10"/>
      
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
