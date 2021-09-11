import ButtonStyle from "../styles/buttonStyle";

function ButtonAction({ symbol, value, handleClick }) {
  // 'symbol' property may be passed to the different rendered instances of this component
  return (
    <ButtonStyle action onClick={() => handleClick()}>
      {value}
    </ButtonStyle>
  );
}

export default ButtonAction;
