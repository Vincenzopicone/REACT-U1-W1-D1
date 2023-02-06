import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImgComponent from "./components/ImgComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Primi esercizi con REACT </h1>
        <ButtonComponent
          width="50"
          backgroundColor="green"
          text="Clicca qui"
          fontSize="3"
        />
        <ImgComponent src="http://placekitten.com/300/300" alt="Foto Gattini" />
      </header>
    </div>
  );
}

export default App;
