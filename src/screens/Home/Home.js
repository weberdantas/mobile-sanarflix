import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, BackHandler } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { colors, strings } from '../../res';
import api from './../../config/api';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCourses: null
        };
    }

    componentDidMount() {
        this.getListCourses();
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = async () => {
        await this.props.navigation.navigate('Presentation');
    }

    getListCourses = () => {

        fetch(api.cursos, {
            headers: {
                Accept: 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                this.setState({ listCourses: json });
            })
            .catch(() => {
                console.warn('Erro');
            });
    }

    render() {

        const { listCourses } = this.state;
        const { navigation } = this.props;

        return (
            <LinearGradient colors={colors.$GRADIENT_BACKGROUND} style={{ flex: 1 }}>
                <View style={styles.container}>
                    {/* TITLE */}
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>{strings.courses}</Text>
                    </View>
                    {/* COURSES */}
                    <View>
                        <FlatList
                            data={listCourses}
                            renderItem={({ item }) =>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    onPress={() => navigation.navigate('Course')}
                                >
                                    <View style={styles.courseContainer}>
                                        <Image source={{ uri: item.imagem }} style={styles.image} />
                                        <View style={styles.dataContainer}>
                                            <Text style={styles.nome}>{item.nome}</Text>
                                            <Text style={styles.area}>ÁREA: {item.area}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

export default Home;