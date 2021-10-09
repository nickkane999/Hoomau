import styled, { css } from "styled-components";

export const Form = styled.form`
  width: 100%;
  text-align: left;
  color: white;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
  background-color: inherit;
  color: white;
`;

export const InputLabel = styled.label`
  margin-bottom: 10px;
`;

export const InputContainer = styled.div`
  background-color: #212121;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0px;
  ${(props) =>
    props.error &&
    css`
      border: 4px solid red;
    `}
`;

export const InputError = styled.div`
  color: red;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props: any) => props.justifyContent};
  align-items: ${(props: any) => props.alignItems};
`;
