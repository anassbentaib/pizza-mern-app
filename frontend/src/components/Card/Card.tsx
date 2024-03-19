import React from "react";
import Container from "../Container/Container";
interface CardProps {
  cardHeader?: React.ReactElement;
  cardBody?: React.ReactElement;
  cardFooter?: React.ReactElement;
}
const Card = ({ cardHeader, cardBody, cardFooter }: CardProps) => {
  return (
    <div className="py-10">
      <Container>
        <div
          className="min-h-[80vh] py-10"
          style={{ backgroundColor: "var(--white-color)" }}
        >
          <div>{cardHeader}</div>
          <div>{cardBody}</div>
          <div>{cardFooter}</div>
        </div>
      </Container>
    </div>
  );
};

export default Card;
