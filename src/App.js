import { TodoProvider } from "./context/TodoContext";
import { ThemeProvider } from "./context/ThemeContext";
import DarkModeBtn from "./components/DarkModeBtn";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <DarkModeBtn />
        <MainPage />
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
