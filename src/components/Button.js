import ButtonStyle from "../styles/buttonStyle";

function Button({ symbol, handleClick }) {
  // 'symbol' property may be passed to the different rendered instances of this component
  return (
    <ButtonStyle onClick={() => handleClick(symbol)}>{symbol}</ButtonStyle> // 'handleClick' function will pass the content of 'symbol' as value so it may be used by other functions
  );
}

export default Button;
