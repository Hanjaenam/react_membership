import React from "react";
import styled from "styled-components";

const Container = styled.div`
  @keyframes scale {
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  span {
    font-size: 20px;
    font-weight: 600;
    &:nth-child(1) {
      animation: scale 1s linear 0s infinite;
    }
    &:nth-child(2) {
      animation: scale 1s linear 0.1s infinite;
    }
    &:nth-child(3) {
      animation: scale 1s linear 0.2s infinite;
    }
    &:nth-child(4) {
      animation: scale 1s linear 0.3s infinite;
    }
    &:nth-child(5) {
      animation: scale 1s linear 0.4s infinite;
    }
    &:nth-child(6) {
      animation: scale 1s linear 0.5s infinite;
    }
    &:nth-child(7) {
      animation: scale 1s linear 0.6s infinite;
    }
  }
`;

export default () => (
  <Container>
    {"Loading".split("").map(word => (
      <span role="text" aria-label="loading" key={word}>
        {word}
      </span>
    ))}
  </Container>
);
