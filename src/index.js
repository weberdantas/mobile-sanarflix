import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Routes from './config/routes';
import { colors } from './res';

const rawVars = Object.assign({}, colors);

EStyleSheet.build(rawVars);

export default class App extends Component {
    render() {
        return (
            <Routes />
        );
    }
}
