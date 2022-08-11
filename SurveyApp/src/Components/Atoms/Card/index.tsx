import React from 'react';
import styled from 'styled-components/native';
import { COLORS } from '@Config';
import { normalize } from '@Utils';

interface CardProps {
    children: React.ReactNode[];
}

const Container = styled.View`
  background-color: ${COLORS.WHITE};
  margin: auto;
  padding: ${normalize(10)} ${normalize(30)};
  width: 80%;
  min-height: ${normalize(200)};
  max-height: ${normalize(400)};
  justify-content: center;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 0 5px ${COLORS.GRAY};
`

const Card = ({ children }: CardProps) => {
    return (
        <Container>
            { children }
        </Container>
    );
};

export default Card;
