import React from "react";
import { StyledCardBody, ReviewTitle } from "./CardBody.styled";
import { Text } from "Components/Atoms";

type CardBodyProps = {
  quote?: string;
  review?: string;
};

export const CardBody: React.FC<CardBodyProps> = ({ quote, review }) => {
  return (
    <StyledCardBody>
      {quote && (
        <div className="book-quote">
          <Text textAlign="center">
            <i>
              <q>{quote}</q>
            </i>
          </Text>
        </div>
      )}

      {review && (
        <div className="book-review">
          <ReviewTitle fontWeight={"semi-bold"}>
            What I love about this book
          </ReviewTitle>
          <Text>{review}</Text>
        </div>
      )}
    </StyledCardBody>
  );
};
