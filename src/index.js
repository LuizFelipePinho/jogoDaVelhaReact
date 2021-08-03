import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import App from './App';
import { useState } from 'react'

function App(){


  const [valor0, jogada0 ] = useState(" ")
  const [valor1, jogada1 ] = useState(" ")
  const [valor2, jogada2 ] = useState(" ")
  const [valor3, jogada3 ] = useState(" ")
  const [valor4, jogada4 ] = useState(" ")
  const [valor5, jogada5 ] = useState(" ")
  const [valor6, jogada6 ] = useState(" ")
  const [valor7, jogada7 ] = useState(" ")
  const [valor8, jogada8 ] = useState(" ")

  const [ estadoJogada, setJogada ] = useState("X");

 
 
  

    function verificaJogada(posicao){
        
        if(posicao == 0) { // verifica a posicao
          if(valor0 == " "){ // verifica se não tem nenhuma marcação
            if(estadoJogada == "X"){ // verifica a vez do jogador
              jogada0("X")
              setJogada("O")

            } else if (estadoJogada == "O"){
              jogada0("O")
              setJogada("X")

            }
            
          } else {
            alert("selecione o quadrado vazio")

          }

        }else if(posicao == 1) { 
          if(valor1 == " "){ 
            if(estadoJogada == "X"){
              jogada1("X");
              setJogada("O");

            } else if (estadoJogada == "O"){
              jogada1("O");
              setJogada("X");

            }
          } else {
            alert("selecione o quadrado vazio");

          }

        }else if(posicao == 2) { 
          if(valor2 == " "){ 
            if(estadoJogada == "X"){
              jogada2("X");
              setJogada("O");

            } else if (estadoJogada == "O"){
              jogada2("O");
              setJogada("X");

            }
          } else {
            alert("selecione o quadrado vazio");

          }

        }else if(posicao == 3) { 
          if(valor3 == " "){ 
            if(estadoJogada == "X"){
              jogada3("X");
              setJogada("O");

            } else if (estadoJogada == "O"){
              jogada3("O");
              setJogada("X");

            }
          } else {
            alert("selecione o quadrado vazio");

          }

        }else if(posicao == 4) { 
          if(valor4 == " "){ 
            if(estadoJogada == "X"){
              jogada4("X");
              setJogada("O");

            } else if (estadoJogada == "O"){
              jogada4("O");
              setJogada("X");

            }
          } else {
            alert("selecione o quadrado vazio");

          }

        }else if(posicao == 5) { 
          if(valor5 == " "){ 
            if(estadoJogada == "X"){
              jogada5("X");
              setJogada("O");

            } else if (estadoJogada == "O"){
              jogada5("O");
              setJogada("X");

            }
          } else {
            alert("selecione o quadrado vazio");

          }

        }else if(posicao == 6) { 
          if(valor6 == " "){ 
            if(estadoJogada == "X"){
              jogada6("X");
              setJogada("O");

            } else if (estadoJogada == "O"){
              jogada6("O");
              setJogada("X");

            }
          } else {
            alert("selecione o quadrado vazio");

          }

        }else if(posicao == 7) { 
          if(valor7 == " "){ 
            if(estadoJogada == "X"){
              jogada7("X");
              setJogada("O");

            } else if (estadoJogada == "O"){
              jogada7("O");
              setJogada("X");

            }
          } else {
            alert("selecione o quadrado vazio");

          }

        }else if(posicao == 8) { 
          if(valor8 == " "){ 
            if(estadoJogada == "X"){
              jogada8("X");
              setJogada("O");

            } else if (estadoJogada == "O"){
              jogada8("O");
              setJogada("X");

            }
          } else {
            alert("selecione o quadrado vazio");

          }

        }  
    












    }


    /* formas de ganhar
    
    0 == 1 == 2
    3 == 4 == 5
    6 == 7 == 8
    
    0 == 3 == 6
    1 == 4 == 7
    2 == 5 == 8

    0 == 4 == 8
    2 == 4 == 6


    
    */

    function verificaVencedor(){
      console.log(valor0)
      if(valor0 === valor1 === valor2){
        console.log("foi")

      }
    }

  return (
  <> 
    <div className="container">
      <div className="box" onClick = { () => { verificaJogada(0)} } > {valor0} </div>
      <div className="box" onClick = { () => { verificaJogada(1)} } > {valor1} </div>
      <div className="box" onClick = { () => { verificaJogada(2)} } > {valor2} </div>
      <div className="box" onClick = { () => { verificaJogada(3)} } > {valor3} </div>
      <div className="box" onClick = { () => { verificaJogada(4)} } > {valor4} </div>
      <div className="box" onClick = { () => { verificaJogada(5)} } > {valor5} </div>
      <div className="box" onClick = { () => { verificaJogada(6)} } > {valor6} </div>
      <div className="box" onClick = { () => { verificaJogada(7)} } > {valor7} </div>
      <div className="box" onClick = { () => { verificaJogada(8)} } > {valor8} </div>

    </div>

      <h3>De quem é vez: {estadoJogada}</h3>
      <label>Clique para saber se venceu </label>
      <button onClick = { verificaVencedor }>Resultado</button>

  </> 







  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);