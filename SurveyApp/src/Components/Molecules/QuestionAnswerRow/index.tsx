import React from 'react';
import { Text, View } from 'react-native';
import { QuestionLabel } from '../../Atoms';

interface QuestionAnswerRowProps {
    question: string;
    answer: string|number;
}

const QuestionAnswerRow = ({ question, answer }: QuestionAnswerRowProps) => {
    return (
        <View>
            <QuestionLabel content={ question } />
            <Text>{answer}</Text>
        </View>

    );
};

export default QuestionAnswerRow;
