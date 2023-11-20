import Container from "@/components/Atoms/Container/Container";
import React from "react";

interface ICardsContainerProps {
    children: React.ReactNode;
}

const CardsContainer = ({ children }: ICardsContainerProps) => {
  return (
    <Container>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {children}
      </ul>
    </Container>
  )
}

export default CardsContainer;