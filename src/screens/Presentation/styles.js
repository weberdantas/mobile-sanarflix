import EStylesheet from 'react-native-extended-stylesheet';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default EStylesheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: '$GRADIENT_PRIMARY',
        width: wp('85%'),
        height: hp('80%'),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagerContainer: {
        marginBottom: 20
    },
    image: {
        width: 220,
        height: 180
    },
    presentation: {
        width: wp('70%'),
        marginTop: 20,
        marginBottom: 20
    },
    presentationText: {
        fontSize: hp('2.8%'),
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 30,
        marginBottom: 20
    },
    button: {
        backgroundColor: '$SECOND_COLOR',
        width: wp('55%'),
        height: hp('6%'),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: hp('2.6%')
    }
});