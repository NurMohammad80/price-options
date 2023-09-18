import "./App.css";
import Nav from "./components/Nav/Nav";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import DaisyNav from "./components/DaisyNav/DaisyNav";

function App() {
  return (
    <>
      <Nav></Nav>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-7xl">Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
