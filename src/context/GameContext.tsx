import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface GameContextProps {
  children: ReactNode
}

type OptionProps = 'X' | 'O' | ''

interface SumContextProps {
  start: boolean;
  setStart:(start: boolean) => void;
  end: boolean;
  setEnd:(end: boolean) => void;
  player1: boolean;
  setPlayer1:(player1: boolean) => void;
  win: boolean;
  setWin:(win: boolean) => void;
  listWin: number[];
  setListWin:(listWin: number[]) => void;
  winner: WinnerProps;
  setWinner:(winner: WinnerProps) => void;
  select: OptionProps;
  setSelect:(select: OptionProps) => void;
  list: ListOptionsProps;
  setList:(list: ListOptionsProps) => void;
  click: number;
  setClick:(click: number) => void;
}

type ListOptionsProps = [OptionProps, OptionProps, OptionProps,OptionProps,OptionProps,OptionProps,OptionProps,OptionProps,OptionProps];


type WinnerProps = "player1" | "player2" | "";


export const GameContext = createContext<SumContextProps>({} as SumContextProps)

export function UseGameContext ({children} : GameContextProps) {
  
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [player1, setPlayer1] = useState(true);
  const [win, setWin] = useState(false)
  const [listWin, setListWin] = useState<number[]>([])
  const [winner, setWinner] = useState<WinnerProps>("")
  const [select, setSelect] = useState<OptionProps>("X")
  const [list, setList ] = useState<ListOptionsProps>(["", "", "", "", "", "", "", "", ""])
  const [click, setClick] = useState<number>(9)

  function reset() {
    setEnd(false);
    setPlayer1(true);
    setListWin([]);
    setWinner("");
    setSelect("X");
    setList(["", "", "", "", "", "", "", "", ""]);
    setClick(9)
  }

   useEffect(() => {
    if (start ===true){
      reset()
    }
   },[start])
  

  return (
    <GameContext.Provider value={{
        start, setStart,
        end, setEnd,
        player1, setPlayer1,
        winner, setWinner,
        select, setSelect,
        list, setList,
        click, setClick,
        win, setWin,
        listWin, setListWin
    }}>
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  const context = useContext(GameContext)

  return context
}

