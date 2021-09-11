import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ContainerStyle from "./styles/containerStyle";
import ContainerStyleTwo from "./styles/containerStyleTwo";
import Button from "./components/Button";
import ButtonLarge from "./components/ButtonLarge";
import ButtonBlank from "./components/ButtonBlank";
import ButtonAction from "./components/ButtonAction";
import Input from "./components/Input";
import CalcWrapperStyle from "./styles/calcWrapperStyle";
import RowStyle from "./styles/rowStyle";
import ColStyle from "./styles/colStyle";

function App() {
  const [result, setResult] = useState(""); // Initial state is blank, result will be shown inside the Input component

  useEffect(() => {
    document.title = `Calculadora: [ ${result} ]`; // A simple useEffect hook that will show in real time the current state of 'result' in the document title
  });

  useEffect(() => {
    if (result == "Infinity") {
      // Hard-coded solution for situations where a division by zero is detected
      setResult("0");
    }
  });

  const addToResult = (val) => {
    // the 'symbol' from a Button is received as value (val) and used in the concatenation operation
    try {
      setResult(result + val); // This function will display numbers and operators when the buttons are pressed
    } catch (error) {
      alert(
        "[ ERROR ]\n\nLa operación es inválida, por favor intente de nuevo.\n\nMensaje de error:\n\n" +
          error
      );
      setResult(""); // Error handling logic is applied in case of invalid user input
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

  const saveResult = () => {
    localStorage.setItem("Saved value", JSON.stringify(result)); // Local Storage is used in this function to save the current state of 'result'
  };

  return (
    <ContainerStyle>
      <CalcWrapperStyle>
        <Input result={result} />

        <RowStyle>
          <Button symbol="C" handleClick={resetInput} />
          <Button symbol="/" handleClick={addToResult} />
          <Button symbol="*" handleClick={addToResult} />
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

        <ContainerStyleTwo>
          <ButtonAction symbol="" value="Guardar" handleClick={saveResult} />
          <ButtonAction value="Borrar" />
          <ButtonAction value="Recuperar" />
        </ContainerStyleTwo>
      </CalcWrapperStyle>
    </ContainerStyle>
  );
}

export default App;
