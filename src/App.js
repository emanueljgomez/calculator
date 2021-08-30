import React from "react";
import ContainerStyle from "./styles/containerStyle";
import Button from "./components/Button";
import ButtonLarge from "./components/ButtonLarge";
import ButtonBlank from "./components/ButtonBlank";
import Input from "./components/Input";
import CalcWrapperStyle from "./styles/calcWrapperStyle";
import RowStyle from "./styles/rowStyle";
import ColStyle from "./styles/colStyle";

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
          <ButtonBlank />
        </RowStyle>

        <RowStyle>
          <Button symbol="4" />
          <Button symbol="5" />
          <Button symbol="6" />
          <ColStyle>
            <ButtonLarge symbol="+" />
          </ColStyle>
        </RowStyle>

        <RowStyle>
          <Button symbol="1" />
          <Button symbol="2" />
          <Button symbol="3" />
          <ButtonBlank />
        </RowStyle>

        <RowStyle>
          <Button symbol="0" />
          <Button symbol="." />
          <ButtonBlank />
          <ColStyle>
            <ButtonLarge symbol="=" />
          </ColStyle>
        </RowStyle>
      </CalcWrapperStyle>
    </ContainerStyle>
  );
}

export default App;
