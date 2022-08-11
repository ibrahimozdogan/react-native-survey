import React from 'react';
import styled from 'styled-components/native';
import { COLORS, FONTS } from '@Config';
import { normalize } from '@Utils';

interface QuestionLabelProps {
    content: string;
}

const Label = styled.Text`
  color: ${COLORS.PRIMARY};
  font-size: ${FONTS.MEDIUM};
  font-weight: bold;
  text-align: left;
  padding: ${normalize(5)} 0;
`

const QuestionLabel = ({ content }: QuestionLabelProps) => {
    return (
        <Label>{content}</Label>
    );
};

export default QuestionLabel;
