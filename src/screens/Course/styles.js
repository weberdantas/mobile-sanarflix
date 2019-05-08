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
    headerOverlayContainer: {
        marginTop: 20,
        marginBottom: 30,
        width: wp('86%'),
        height: hp('9%'),
        elevation: 2,
        backgroundColor: '$SECOND_COLOR',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    headerOverlayText: {
        fontFamily: 'Gill Sans',
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '$WHITE'
    },
    moduleContainer: {
        flexDirection: 'row',
        marginBottom: 8,
        marginTop: 8,
        width: wp('91%'),
        height: hp('6%'),
        backgroundColor: '$WHITE',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    moduleText: {
        alignItems: 'center',
        marginLeft: 5,
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
        color: '$SECOND_COLOR'
    },
    iconCheck: {
        color: '$THIRD_COLOR',
        marginLeft: 5
    },
    iconCloseOverlay: {
        position: 'absolute',
        right: wp('-7.5%'),
        top: hp('-20.5%'),
        color: '$SECOND_COLOR'
    },
    divider: {
        width: wp('70%'),
        backgroundColor: '$BLACK',
        marginBottom: 15
    },
    classContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleClass: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '$BLACK',
        marginBottom: 5
    },
    buttonVideo: {
        width: wp('20%'),
        height: hp('5%'),
        backgroundColor: '$SECOND_COLOR',
        borderRadius: 5,
        marginBottom: 20
    },
    buttonVideoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    buttonVideoText: {
        textAlign: 'center',
        color: '$WHITE',
        marginLeft: 5,
        fontSize: hp('2.4%')
    }
});