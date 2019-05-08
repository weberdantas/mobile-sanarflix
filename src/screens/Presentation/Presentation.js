import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, BackHandler, Alert } from 'react-native';

import { images, strings } from '../../res';
import styles from './styles';

class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = async () => {
        await Alert.alert(strings.warning, strings.closeApp, [{ text: 'Não', style: 'cancel' }, { text: 'Sim', onPress: () => BackHandler.exitApp() }], { cancelable: false });
    }

    render() {

        const { navigation } = this.props;

        return (
            <ImageBackground source={images.background} style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.content}>
                        {/* LOGO */}
                        <View style={styles.imagerContainer}>
                            <Image source={images.logo} style={styles.image} />
                        </View>
                        {/* PRESENTATION */}
                        <View style={styles.presentation}>
                            <Text style={styles.presentationText}>{strings.presentation}</Text>
                        </View>
                        {/* BUTTON */}
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                activeOpacity={0.5}
                                onPress={() => navigation.navigate('Home')}
                            >
                                <Text style={styles.buttonText}>{strings.enter}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default Presentation;