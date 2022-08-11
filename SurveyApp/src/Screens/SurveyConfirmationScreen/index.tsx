import React from 'react';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import { SurveyAnswersOverview } from '@Components'
import { RouteProp } from '@react-navigation/native';
import { Navigation } from '@Utils';
import { Answer } from '@Types';

const SurveyConfirmationScreen = ({ route }: { route: RouteProp<{ params: { answers: Answer[] } }, 'params'> }) => {
    const { answers } = route.params

    return (
        <SafeAreaView style={ StyleSheet.absoluteFillObject }>
            <SurveyAnswersOverview
                answers={ answers }
                onSubmit={ () => {
                    Alert.alert('Success', 'Answer successfully submitted')
                } }
                onReset={ () => Navigation.navigateAndReset({
                    routeName: 'SurveyScreen'
                }) }/>
        </SafeAreaView>
    )
};

export default SurveyConfirmationScreen
