import { useEffect, useState } from "react"
import { useGame } from "../../context/GameContext"
import { Block, Container, Table,Winner } from "./styles"

interface GameProps {
  list: [OptionProps, OptionProps, OptionProps,OptionProps,OptionProps,OptionProps,OptionProps,OptionProps,OptionProps]
}

type OptionProps = 'X' | 'O' | ''

export function Game(){
  const { click, setClick, 
          start, setStart,
          end, setEnd,
          list, setList,
          select, setSelect,
          player1, setPlayer1,
          win,  setWin,
          winner, setWinner,
          listWin, setListWin
        } = useGame()
  
  useEffect(() => {

    if (start === true){
     if (click<9 ){
       const listTemp=list;
       if (listTemp[click]===""){
      
          listTemp[click]=select;
          setList(listTemp)
          setClick(9)
          setPlayer1(!player1)
          handlePlayer(!player1)
              }
     }
     setWin(result())
     if (win){
      setWinner(`${!player1 ? 'player1' : 'player2'}`)
     }
   }
 },[click, list])

 const result= () => {
  const listWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < listWin.length; i++) {
  const [a, b, c] = listWin[i];
  if (list[a] && list[a] === list[b] && list[a] === list[c]) {
    setListWin([a,b,c])
    setEnd(true);
    setStart(false)
    return true;
  }
}
const teste = list.filter((l) => l ==='')

if (teste.length<1){
  console.log("entrou no teste")
  setEnd(true)
  setStart(false)
}
return false;
}

 function handlePlayer(player1: boolean){
  
  if (player1){
    setSelect("X")
  }
  else {
    setSelect("O")
  }
 }


  return (
    <Container>
      {end && <>{!win && <Winner>🤝A partida terminou empatada🤝</Winner>}</>}
      {win && <Winner> 🏆 Vencedor é o {!player1 ? "Jogador 1" : "Jogador 2" } 🏆</Winner>}
      <Table>
        {list.map((l, index) => {
          return (<Block win={listWin.includes(index)} listColor={l} onClick={() => setClick(index)} key={index}>{l}</Block>)
        })}

      </Table>
      {!win && <div> {!end && <>É a vez do  {player1 ? "Jogador 1 ( X )" : "Jogador 2 ( O )"} selecionar um quadro</>}</div>} 
      {end && <div>Clique em iniciar para uma nova partida</div>} 
      
    </Container>
  )
}