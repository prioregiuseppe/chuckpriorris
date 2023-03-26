import { useState } from 'react'
import './App.css'
import chuck from './assets/foto.svg'
import Tendina from './components/Tendina'
import Stampa from './components/Stampa'
import Buttons from './components/Buttons'




function App() {
  const [categories, setCategories] = useState([])
  const [joke, setJoke] = useState("")

  function CaricaCat(){
      let url = 'https://api.chucknorris.io/jokes/categories'

    let promise = fetch(url)

    promise.then(
        response => response.json()
    ).then(
        data => {
          data.forEach(element => {
            let obj = data.map(function(item, index){
              return {
                id: index,
                value: item
              }
            })
            setCategories(obj)
          });
        }
    )
  }

  function MostraGioco(){
      let url = `https://api.chucknorris.io/jokes/random`
      let promise = fetch(url)
      
      promise.then(
        response => response.json()
      ).then(
        data => setJoke(data.value)
      ) 
  }

  return (
    <div className="App">
      <div id='container'>
      <h1>Webapp API Chuck Norris</h1>
      <p>Design di una pagina che utilizza la API di chucknorris.io per generare alla pressione di un pulsante una battuta del tipo che selezioni nel menu a tendina qui sotto.</p>
      <img src={chuck}/>
      <Tendina categories={categories} clbk={CaricaCat} />
      {joke != "" &&
        <Stampa joke={joke}/>
        } 
      <Buttons text="carica joke" variant={"active"}  styles={"margin-top-75"} clbk={() => MostraGioco()}/>
      <Buttons text="copia testo" variant={joke === "" ? "disabled" : "active"} styles={"margin-top-20"}/>
      </div>
    </div>
  )
}

export default App
