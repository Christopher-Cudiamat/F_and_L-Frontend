"use client";

import Container from "@/components/Atoms/Container/Container";
import React from "react";
import { Fade } from "react-awesome-reveal";

interface ICardsContainerProps {
  children: React.ReactNode;
}

const CardsContainer: React.FC<ICardsContainerProps> = ({ children }) => {
  return (
    <Fade
      direction='up'
      fraction={0}
      triggerOnce
    >
      <Container>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>{children}</ul>
      </Container>
    </Fade>
  );
};

export default CardsContainer;
