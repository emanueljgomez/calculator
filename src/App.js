import React from "react";
import ContainerStyle from "./styles/containerStyle";
import Button from "./components/Button";
import Input from "./components/Input";
import CalcWrapperStyle from "./styles/calcWrapperStyle";
import RowStyle from "./styles/rowStyle";

function App() {
  return (
    <ContainerStyle>
      <CalcWrapperStyle>
        <Input />

        <RowStyle>
          <Button symbol="C" />
          <Button symbol="/" />
          <Button symbol="x" />
          <Button symbol="-" />
        </RowStyle>

        <RowStyle>
          <Button symbol="7" />
          <Button symbol="8" />
          <Button symbol="9" />
          <Button />
        </RowStyle>

        <RowStyle>
          <Button symbol="4" />
          <Button symbol="5" />
          <Button symbol="6" />
          <Button symbol="+" />
        </RowStyle>

        <RowStyle>
          <Button symbol="1" />
          <Button symbol="2" />
          <Button symbol="3" />
          <Button />
        </RowStyle>

        <RowStyle>
          <Button symbol="0" />
          <Button symbol="." />
          <Button />
          <Button symbol="=" />
        </RowStyle>
      </CalcWrapperStyle>
    </ContainerStyle>
  );
}

export default App;
