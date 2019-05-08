import EStylesSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default EStylesSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '$WHITE_TRANSLUCID'
    },
    logo: {
        width: 220,
        height: 180
    },
    imageBackground: {
        flex: 1,
        width: width,
        height: height
    },
});