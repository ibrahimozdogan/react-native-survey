import React, { createRef, useCallback, useEffect, useRef, useState } from 'react';
import { MultipleChoiceQuestion, ScaleQuestion, SingleChoiceQuestion, TextInputQuestion } from '../../Molecules'
import { Button, Card, Carousel, Loading } from '../../Atoms';
import styled from 'styled-components/native';
import { Answer, Question } from '@Types';
import { Alert } from 'react-native';

interface SurveyProps {
    questions: Question[];
    onComplete: (answers: Answer[]) => void;
    isLoading?: boolean;
}

const getQuestionByType = (question: Question, onChange: (answer: string|number) => void) => {
    switch (question.type) {
    case 'radio':
        return <SingleChoiceQuestion
            key={ question.id }
            question={ question.question }
            options={ question.options }
            onChange={ onChange } />
    case 'checkbox':
        return <MultipleChoiceQuestion
            key={ question.id }
            question={ question.question }
            maxSelectableCount={ question.maxSelectableCount }
            options={ question.options }
            onChange={ onChange } />
    case 'scale':
        return <ScaleQuestion
            key={ question.id }
            question={ question.question }
            max={ question.max }
            onChange={ onChange } />
    case 'text-area':
        return <TextInputQuestion
            key={ question.id }
            question={ question.question }
            multiline={ true }
            onChange={ onChange } />
    }
}

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Survey = ({ questions, onComplete, isLoading = false }: SurveyProps) => {
    const carouselRef = createRef<{ scrollTo: (pageNumber: number) => void }>()
    const answers = useRef<Answer[]>([])
    const [index, setIndex] = useState(0);

    useEffect(() => {
        carouselRef.current && carouselRef.current?.scrollTo(index)
    }, [carouselRef, index])

    useEffect(() => {
        answers.current = questions.map(question => ({ id: question.id, answer: '', question: question.question }))
    }, [questions])

    const saveSurveyAnswer = (answer: number | string) => {
        answers.current[index].answer = answer
    }

    const checkIfCurrentAnswerValid = () => {
        if (!answers.current[index].answer) {
            Alert.alert('Alert',  'The answer cannot be empty!' )

            return false;
        }

        return true;
    }

    const validateAnswerAndProceed = useCallback((mode: 'inc' | 'dec') => {
        setIndex(prev => mode === 'inc' ? prev + 1 : prev - 1)
    }, [])

    return (
        <Card>
            <Loading isLoading={ isLoading }>
                <Carousel ref={ carouselRef }>
                    {
                        questions.map(question => getQuestionByType(question, saveSurveyAnswer))
                    }
                </Carousel>
            </Loading>
            <ButtonContainer>
                <Button label={ 'Back' } disabled={ index === 0 } onPress={ () => validateAnswerAndProceed('dec') } />
                <Button label={ 'Next' } onPress={ () => checkIfCurrentAnswerValid() &&
                    (
                        questions.length - 1 !== index ?
                            validateAnswerAndProceed('inc') :
                            onComplete(answers.current)
                    ) }/>
            </ButtonContainer>
        </Card>
    )
};

export default Survey
