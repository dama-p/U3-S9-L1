import logo from "./logo.svg";
import "./App.css";
import "./ButtonComponent";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";
import TitleComponent from "./TitleComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="containerDiv">
          <ImageComponent imageURL="https://placedog.net/500" imageAlt="Immagine di un cagnolino" />
          <div className="containerBtns">
            <TitleComponent title="Hey!" />
            <ButtonComponent buttonText="Ciao!" />
            <ButtonComponent buttonText="Questi bottoni" />
            <ButtonComponent buttonText="Sono una serie di prove!" />{" "}
          </div>{" "}
        </div>
      </header>
    </div>
  );
}

export default App;
