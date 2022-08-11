import React from 'react';
import { QuestionLabel, TextInput } from '../../Atoms';
import { View } from 'react-native';

interface TextInputQuestionProps {
    question: string;
    multiline: boolean;
    onChange: (answer: string) => void;
}

const TextInputQuestion = ({ question, onChange, multiline }: TextInputQuestionProps) => {
    return (
        <View>
            <QuestionLabel content={ question } />
            <TextInput onChange={ onChange } multiline={ multiline } />
        </View>
    );
};

export default TextInputQuestion;
