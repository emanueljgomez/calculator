import ButtonStyle from "../styles/buttonStyle";

function ButtonLarge({ symbol }) {
  // 'symbol' property may be passed to the different rendered instances of this component
  return <ButtonStyle large>{symbol}</ButtonStyle>;
}

export default ButtonLarge;
