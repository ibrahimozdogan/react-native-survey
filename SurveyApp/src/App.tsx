/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SurveyConfirmationScreen, SurveyScreen } from '@Screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navigation } from '@Utils';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer ref={ Navigation.navigationRef }>
            <Stack.Navigator>
                <Stack.Screen name="SurveyScreen" component={ SurveyScreen } />
                <Stack.Screen name="SurveyConfirmationScreen" component={ SurveyConfirmationScreen } />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
