import React, { useCallback, useEffect, useState } from 'react';
import { Button, Card, Option, QuestionLabel } from '../../Atoms';
import { View } from 'react-native';


interface MultipleChoiceQuestionProps {
    question: string;
    options: { label: string; value: any }[];
    maxSelectableCount?: number;
    onChange: (answer: string) => void;
}

const MultipleChoiceQuestion = ({ question, options, maxSelectableCount, onChange }: MultipleChoiceQuestionProps) => {
    const [isSelectedMap, setIsSelectedMap] = useState<Record<string, boolean>>({});

    const _onPress = useCallback((value: string) => {
        setIsSelectedMap((prev) => {
            let modifiedState = { ...prev };

            if (prev[value]) {
                delete modifiedState[value]
            } else {
                modifiedState[value] = true
            }

            if (maxSelectableCount && Object.values(modifiedState).length > maxSelectableCount) {
                return prev;
            }

            return modifiedState;
        })
    }, [setIsSelectedMap, maxSelectableCount])

    useEffect(() => {
        onChange(Object.keys(isSelectedMap).join(','))
    }, [isSelectedMap, onChange])

    return (
        <View>
            <QuestionLabel content={ question } />
            {
                options.map(option =>
                    <Option
                        onPress={ () => _onPress(option.value) }
                        label={ option.label }
                        value={ option.value }
                        key={ option.value }
                        isSelected={ isSelectedMap[option.value] } />
                )
            }
        </View>
    );
};

export default MultipleChoiceQuestion;
