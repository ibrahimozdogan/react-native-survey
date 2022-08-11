import React from 'react';
import { QuestionAnswerRow } from '../../Molecules'
import { Button, Card } from '../../Atoms';
import styled from 'styled-components/native';
import { Answer } from '@Types';
import { ScrollView } from 'react-native';

interface SurveyAnswersOverviewProps {
    answers: Answer[];
    onSubmit: () => void;
    onReset: () => void;
}
const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const SurveyAnswersOverview = ({ answers, onSubmit, onReset }: SurveyAnswersOverviewProps) => {
    return (
        <Card>
            <ScrollView>
                {
                    answers.map(answer => <QuestionAnswerRow
                        key={ answer.id }
                        question={ answer.question }
                        answer={ answer.answer } />)
                }
            </ScrollView>
            <ButtonContainer>
                <Button label={ 'Reset' }onPress={ onReset } />
                <Button label='Submit' onPress={ onSubmit } />
            </ButtonContainer>
        </Card>
    )
};

export default SurveyAnswersOverview
