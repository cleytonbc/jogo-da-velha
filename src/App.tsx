import { UseGameContext } from "./context/GameContext";
import { Dashboard } from "./pages/Dashboard";
import Global from "./styles/Global";

export function App() {
  
  return (
    <UseGameContext>
      <Dashboard />
      <Global />
    </UseGameContext>
  )
}
