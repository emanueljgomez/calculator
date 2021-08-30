import ButtonStyle from "../styles/buttonStyle";

function ButtonLarge({ symbol, handleClick }) {
  // 'symbol' property may be passed to the different rendered instances of this component
  return (
    <ButtonStyle large onClick={() => handleClick(symbol)}>
      {symbol}
    </ButtonStyle>
  ); // 'handleClick' function will pass the content of 'symbol' as value so it may be used by other functions
}

export default ButtonLarge;
