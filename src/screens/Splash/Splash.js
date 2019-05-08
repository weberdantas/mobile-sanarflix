import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Animated } from 'react-native';

import { images } from '../../res';
import styles from './styles';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoOpacity: new Animated.Value(0)
        };
    }

    async componentDidMount() {
        Animated.timing(this.state.logoOpacity, {
            toValue: 1,
            duration: 3500,
        }).start(() => {
            this.props.navigation.navigate('Presentation')
        })
    }

    render() {
        return (
            <ImageBackground source={images.background} style={styles.imageBackground} >
                <View style={styles.container}>
                    <Animated.Image source={images.logo}
                        style={{ ...styles.logo, opacity: this.state.logoOpacity }}>
                    </Animated.Image>
                </View>
            </ImageBackground>
        );
    }
}

export default Splash;