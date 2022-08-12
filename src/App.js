import "./App.css";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";

function App() {
  return (
    <>
      <Header title="Todo List App" searchBar={false} />
      <Todos />
    </>
  );
}

export default App;
