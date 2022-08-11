import React, { useState } from 'react';
import { QuestionLabel, Star } from '../../Atoms';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { normalize } from '@Utils';

interface SingleChoiceQuestionProps {
    question: string;
    max: 2 | 3 | 4 | 5;
    onChange: (answer: number) => void;
}

const StarContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: ${normalize(40)};
`

const SingleChoiceQuestion = ({ question, max, onChange }: SingleChoiceQuestionProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <View>
            <QuestionLabel content={ question } />
            <StarContainer>
                {
                    [...Array(max)].map((_, index) => {
                        return <Star
                            onPress={ () => {
                                const newIndex = index + 1;
                                setSelectedIndex(newIndex)
                                onChange(newIndex)
                            } }
                            isSelected={ (index + 1) <= selectedIndex }
                            key={ `star-${index}` } />
                    })
                }
            </StarContainer>
        </View>
    );
};

export default SingleChoiceQuestion;
