import InputStyle from "../styles/inputStyle";

function Input({ result }) {
  // Input receives the 'result' property
  return <InputStyle type="text" readOnly value={result} />; // The 'result' property will be displayed inside the input field as its 'value'
}

export default Input;
