import React from "react";
import { useState } from "react";
import ContainerStyle from "./styles/containerStyle";
import Button from "./components/Button";
import ButtonLarge from "./components/ButtonLarge";
import ButtonBlank from "./components/ButtonBlank";
import Input from "./components/Input";
import CalcWrapperStyle from "./styles/calcWrapperStyle";
import RowStyle from "./styles/rowStyle";
import ColStyle from "./styles/colStyle";

function App() {
  const [result, setResult] = useState(""); // Initial state is blank, result will be shown inside the Input component

  const addToResult = (val) => {
    // the 'symbol' from a Button is received as value (val) and used in the concatenation operation
    try {
      setResult(result + val); // This function will display numbers and operators when the buttons are pressed
      if (result == "Infinity") {
        setResult("0");
      }
    } catch (error) {
      alert(
        "[ ERROR ]\n\nLa operación es inválida, por favor intente de nuevo.\n\nMensaje de error:\n\n" +
          error
      );
      setResult("");
    }
  };

  const resetInput = () => {
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      alert(
        "[ ERROR ]\n\nLa operación es inválida, por favor intente de nuevo.\n\nMensaje de error:\n\n" +
          error
      );
      setResult("");
    }
  };

  return (
    <ContainerStyle>
      <CalcWrapperStyle>
        <Input result={result} />

        <RowStyle>
          <Button symbol="C" handleClick={resetInput} />
          <Button symbol="/" handleClick={addToResult} />
          <Button symbol="x" handleClick={addToResult} />
          <Button symbol="-" handleClick={addToResult} />
        </RowStyle>

        <RowStyle>
          <Button symbol="7" handleClick={addToResult} />
          <Button symbol="8" handleClick={addToResult} />
          <Button symbol="9" handleClick={addToResult} />
          <ButtonBlank />
        </RowStyle>

        <RowStyle>
          <Button symbol="4" handleClick={addToResult} />
          <Button symbol="5" handleClick={addToResult} />
          <Button symbol="6" handleClick={addToResult} />
          <ColStyle>
            <ButtonLarge symbol="+" handleClick={addToResult} />
          </ColStyle>
        </RowStyle>

        <RowStyle>
          <Button symbol="1" handleClick={addToResult} />
          <Button symbol="2" handleClick={addToResult} />
          <Button symbol="3" handleClick={addToResult} />
          <ButtonBlank />
        </RowStyle>

        <RowStyle>
          <Button symbol="0" handleClick={addToResult} />
          <Button symbol="." handleClick={addToResult} />
          <ButtonBlank />
          <ColStyle>
            <ButtonLarge symbol="=" handleClick={calculateResult} />
          </ColStyle>
        </RowStyle>
      </CalcWrapperStyle>
    </ContainerStyle>
  );
}

export default App;
