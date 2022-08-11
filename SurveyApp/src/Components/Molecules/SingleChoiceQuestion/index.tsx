import React, { useState } from 'react';
import { Option, QuestionLabel } from '../../Atoms';
import { View } from 'react-native';

interface SingleChoiceQuestionProps {
    question: string;
    options: { label: string; value: any }[];
    onChange: (answer: string) => void;
}

const SingleChoiceQuestion = ({ question, options, onChange }: SingleChoiceQuestionProps) => {
    const [isSelected, setIsSelected] = useState<string>('');

    return (
        <View>
            <QuestionLabel content={ question } />
            {
                options.map(option =>
                    <Option
                        onPress={ () => {
                            setIsSelected(option.value)
                            onChange(option.value)
                        } }
                        label={ option.label }
                        value={ option.value }
                        key={ option.value }
                        isSelected={ option.value === isSelected } />
                )
            }
        </View>
    );
};

export default SingleChoiceQuestion;
