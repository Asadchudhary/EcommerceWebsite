import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

export const Style = () => {
  const Paragraph = styled.p`
    color: blue;
  `;
  const Button = styled.button`
    background-color: ${({ theme }) => theme.Color.bg};
    color: ${({ theme }) => theme.Color.color};
  `;
  const theme = {
    Color: {
      bg: "purple",
      color: "blue",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <Button className="btn" col="white">
          Subscribe
        </Button>
        <Paragraph bg="purple">This is Paragraph</Paragraph>
      </>
    </ThemeProvider>
  );
};
