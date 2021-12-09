import styled from "styled-components";

export const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;

  h1 {
    color: #232323;
    font-size: 5rem;
  }

  button {
    display: flex;
    border-radius: 0.25rem;
    background-color: #232323;
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    outline: none;
    font-size: 3rem;
    font-weight: bold;
    transition: opacity 0.25s ease-in;

    &:hover {
      opacity: 0.9;
      cursor: pointer;
    }
  }
`;
