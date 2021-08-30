import styled, { css } from "styled-components";
// 'css' is an additional required import when special properties are going to be declared

const ButtonStyle = styled.button`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  flex: 1;
  background: transparent;
  border-radius: 0px;
  border: 1px solid #c0c7bb;
  color: #6e736b;
  padding: 0.25em 1em;

  ${(props) =>
    props.blank &&
    css`
      visibility: hidden;
    `}

  ${(props) =>
    props.large &&
    css`
      height: 100px;
    `}
`;
export default ButtonStyle;
