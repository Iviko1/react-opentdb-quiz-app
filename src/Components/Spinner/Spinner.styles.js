import styled, { keyframes } from "styled-components";

const rotate = keyframes`   
    to{
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 10px solid #fff;
  border-color: #232323;
  border-top-color: #fff;
  position: absolute;

  animation: ${rotate} 1s ease-in-out infinite;
`;
