import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const HomeHeading = styled.h1`
  font-size: 3rem;
  color: #232323;
  margin: 1rem;
  text-align: center;
`;

export const HomeSelect = styled.select`
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #232323;
  border-radius: 0.25rem;
  outline: none;
  margin: 1rem;
  width: 50%;
  font-size: 1.25rem;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    width: 75%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #232323;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const HomeStartButton = styled.button`
  min-width: 100px;
  min-height: 50px;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: #232323;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  transition: opacity 0.25s ease-in;

  &:hover {
    opacity: 0.95;
    cursor: pointer;
  }
`;

export const HomeSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ErrorMessage = styled.h1`
  margin-top: 2rem;
  font-size: 1rem;
  color: #232323;
  background-color: rgba(248, 79, 49, 0.8);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  text-align: center;
`;
