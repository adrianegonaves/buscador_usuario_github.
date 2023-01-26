
import StyledGlobal from "./commons/stelydGlobal/StyledGlobal";
import Header from "./componentes/header/Header";
import HomePage from "./page/homePage/HomePage";
import { DivContainer } from "./StyledApp";

function App() {
  return (
    <div>
      <StyledGlobal/>
      <Header />
      <DivContainer>
        <HomePage />
      </DivContainer>
    </div>
  );
}

export default App;
