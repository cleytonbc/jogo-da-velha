import { setSaturation } from "polished";
import { useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Game } from "../../components/Game";
import { Sidebar } from "../../components/Sidebar";
import { useGame } from "../../context/GameContext";

import { Container, Main, Buttons } from "./styled";

type listProps = ['X' | 'O' | '', 'X' | 'O' | '', 'X' | 'O' | '', 'X' | 'O' | '', 'X' | 'O' | '', 'X' | 'O' | '', 'X' | 'O' | '', 'X' | 'O' | '', 'X' | 'O' | '']

export function Dashboard () {
  const { list, setStart, start, end } = useGame()
  const [listGame, setListGame] = useState();

  return (
    <Container>
      <Sidebar />
      <Main>
        <Game  />
          <Buttons>
            <Button onClick={() => setStart(true)} disabled={start}>Iniciar</Button> 
            
          </Buttons>
          <footer>
            <Footer />
          </footer>
      </Main>
    </Container>
  )
}