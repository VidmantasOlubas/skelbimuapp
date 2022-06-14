import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { createRef } from "react"

function App()
{
  const refVardas = createRef()
  const refPass = createRef()

  const handleClick = () =>
  {
    axios({
      method: "post",
      url: '/api/vartotojai',
      data: {vardas:refVardas.current.value, slaptazodis:refPass.current.value}
    })
    console.log('clicked')
  }
  return (
    <div className="App">
      <h1>Vartotojo kurimas</h1>
      <span>Vardas</span>
      <input ref={refVardas} type="text"></input>
      <br />
      <span>Slaptazodis</span>
      <input ref={refPass} type="text" ></input>
      <button onClick={handleClick}>Sukurti</button>
    </div>
  );
}

export default App;
