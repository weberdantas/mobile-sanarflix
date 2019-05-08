import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions, Alert, BackHandler } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Overlay, Icon, Divider } from 'react-native-elements';

import styles from './styles';
import { colors, strings } from '../../res';
import api from './../../config/api';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listModules: null,
            listContent: null,
            visible: false,
            checked: false,
            selectedContent: null,
            itemId: null
        };
    }

    componentDidMount() {
        this.getListModules();
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = async () => {
        await this.props.navigation.navigate('Home');
    }

    getListModules = () => {

        fetch(api.modulos, {
            headers: {
                Accept: 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                this.setState({ listModules: json });
            })
            .catch(() => {
                console.warn('Erro');
            });

    }

    render() {

        const { listModules, visible, checked, selectedContent, itemId } = this.state;

        return (
            <LinearGradient colors={colors.$GRADIENT_BACKGROUND} style={{ flex: 1 }}>
                <View style={styles.container}>
                    {/* TITLE */}
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>{strings.modules}</Text>
                    </View>
                    {/* MODULES */}
                    <View>
                        <FlatList
                            data={listModules}
                            extraData={this.state}
                            renderItem={({ item }) =>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    onPress={() => this.setState({ visible: true, checked: true, itemId: item.id, selectedContent: item.conteudos })}
                                    onLongPress={() =>
                                        Alert.alert(
                                            strings.warning,
                                            strings.markModule,
                                            [{ text: 'Não', style: 'cancel', onPress: () => this.setState({ checked: false }) }, { text: 'Sim', onPress: () => this.setState({ checked: true, itemId: item.id }) }],
                                            { cancelable: false }
                                        )
                                    }
                                >
                                    <View style={styles.moduleContainer}>
                                        <Text style={styles.moduleText}>{item.nome}</Text>
                                        {checked === true && itemId === item.id ? <Icon type='MaterialIcons' name='check' size={20} iconStyle={styles.iconCheck} /> : <View />}
                                    </View>
                                </TouchableOpacity>
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />
                        {/* CLASS */}
                        <Overlay
                            isVisible={visible}
                            windowBackgroundColor="rgba(0, 0, 0, 0.5)"
                            overlayBackgroundColor="#FFF"
                            width={width - 30}
                            height={height - 100}
                            onBackdropPress={() => this.setState({ visible: false })}
                        >
                            <View>
                                <View style={styles.headerOverlayContainer}>
                                    <Text style={styles.headerOverlayText}>Aulas</Text>
                                </View>
                                <Icon type='MaterialCommunityIcons' name='close' size={35} onPress={() => this.setState({ visible: false })} iconStyle={styles.iconCloseOverlay} />
                                <View style={{ height: height - 250 }}>
                                    <FlatList
                                        data={selectedContent}
                                        renderItem={({ item }) =>
                                            <View style={styles.classContainer}>
                                                <Text style={styles.titleClass}>{item.titulo}</Text>
                                                <Divider style={styles.divider} />
                                                <TouchableOpacity style={styles.buttonVideo}>
                                                    <View style={styles.buttonVideoContainer}>
                                                        <Icon type='MaterialIcons' size={17} name='play-circle-filled' color={colors.$WHITE} />
                                                        <Text style={styles.buttonVideoText}>{item.tipio}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        }
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                </View>
                            </View>
                        </Overlay>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

export default Course;