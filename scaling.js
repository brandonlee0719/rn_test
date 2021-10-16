import {Dimensions} from "react-native";

const { width, height } = Dimensions.get('window');
//Guideline sizes are based on standard iPhone 6/7/8 screen mobile device
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale};
