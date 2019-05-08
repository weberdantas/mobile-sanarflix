import EStylesheet from 'react-native-extended-stylesheet';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default EStylesheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    headerContainer: {
        marginTop: 20,
        marginBottom: 30,
        width: wp('91%'),
        height: hp('9%'),
        elevation: 2,
        backgroundColor: '$WHITE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    headerText: {
        fontFamily: 'Gill Sans',
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '$BLACK'
    },
    courseContainer: {
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 5,
        width: wp('91%'),
        backgroundColor: '$WHITE',
        borderRadius: 5,
        alignItems: 'center'
    },
    image: {
        height: 100,
        width: 60,
        borderColor: '$PRIMARY_COLOR',
        borderRadius: 1
    },
    dataContainer: {
        width: wp('55%')
    },
    nome: {
        alignItems: 'center',
        marginLeft: 5,
        fontSize: hp('2.6%'),
        fontWeight: 'bold',
        marginBottom: 3,
        color: '$SECOND_COLOR'
    },
    area: {
        alignItems: 'center',
        marginLeft: 5,
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color: '$BLACK'
    }
});