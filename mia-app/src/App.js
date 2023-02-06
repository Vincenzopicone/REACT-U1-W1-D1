import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImgComponent from "./components/ImgComponent";
import DescriptionComponent from "./components/DescriptionComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Primi esercizi con REACT </h1>
      </header>
      <main>
        <section>
          <ButtonComponent
            width="30"
            backgroundColor="green"
            text="Clicca qui"
            fontSize="2"
            borderRadius="50"
            margin="20"
            color="white"
          />
          <ButtonComponent
            width="30"
            backgroundColor="red"
            text="Non cliccare qui"
            fontSize="2"
            borderRadius="30"
            margin="20"
          />
        </section>
        <section className="containerPhotos">
          <article className="cardPet">
            <DescriptionComponent text="Astronauta" />
            <ImgComponent
              src="http://placekitten.com/200/200"
              alt="Foto Gatto"
            />
          </article>
          <article className="cardPet">
            <DescriptionComponent text="Chirurgo" />
            <ImgComponent src="http://placedog.net/200/200" alt="Foto Cane" />
          </article>
        </section>
        <section>
          <ButtonComponent
            width="20"
            backgroundColor="blue"
            text="Armando"
            fontSize="2"
            borderRadius="50"
            margin="20"
            color="white"
          />
          <ButtonComponent
            width="20"
            backgroundColor="blue"
            text="Alfonso"
            fontSize="2"
            borderRadius="30"
            margin="20"
            color="white"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
