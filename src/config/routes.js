import React from 'react';
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import {
    Presentation,
    Home,
    Course,
    Splash
} from '../screens';

const AppNavigator = createStackNavigator(
    {
        Splash: {
            screen: Splash,
            navigationOptions: {
                header: () => null
            }
        },
        Presentation: {
            screen: Presentation,
            navigationOptions: {
                header: () => null
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                header: () => null
            }
        },
        Course: {
            screen: Course
        },
    }
);

export default createAppContainer(AppNavigator);
