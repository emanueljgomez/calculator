import ButtonStyle from "../styles/buttonStyle";

function Button({ symbol }) {
  // 'symbol' property may be passed to the different rendered instances of this component
  return <ButtonStyle>{symbol}</ButtonStyle>;
}

export default Button;
