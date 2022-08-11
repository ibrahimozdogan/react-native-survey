import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Survey } from '@Components'
import { Question } from '@Types';
import { Navigation } from '@Utils';
import { fetchQuestions } from '@Services';

const SurveyScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [questions, setQuestion] = useState<Question[]>([]);

    useEffect(() => {
        fetchQuestions().then((response) => {
            setIsLoading(true);
            setQuestion(response.data);
            setIsLoading(false);
        })
    }, [])

    return (
        <SafeAreaView style={ StyleSheet.absoluteFillObject }>
            <Survey
                isLoading={ isLoading }
                questions={ questions }
                onComplete={ (answers) => Navigation.navigateAndReset({
                    routeName: 'SurveyConfirmationScreen',
                    params: {
                        answers
                    }
                }) } />
        </SafeAreaView>
    )
};

export default SurveyScreen
