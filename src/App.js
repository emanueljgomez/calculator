import React from "react";
import ContainerStyle from "./styles/containerStyle";
import Button from "./components/Button";
import CalcWrapperStyle from "./styles/calcWrapperStyle";

function App() {
  return (
    <ContainerStyle>
      <CalcWrapperStyle>
        <Button value="Tis a btn" />
      </CalcWrapperStyle>
    </ContainerStyle>
  );
}

export default App;
