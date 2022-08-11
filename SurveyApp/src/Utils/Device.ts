import { Dimensions, PixelRatio, Platform } from 'react-native';
import { memoize } from './Functions';

export const deviceSize = Dimensions.get('window');

export const deviceWidth = (): number => deviceSize.width;

export const deviceHeight = (): number => deviceSize.height;

const _isAndroid = Platform.OS === 'android';
export const isAndroid = ():boolean => _isAndroid;

// based on iphone 5s's scale
const wscale: number = deviceWidth() / 320;
const hscale: number = deviceHeight() / 640;

export const normalize = memoize((size: number, based:'width' | 'height' = 'width'): string => {
    const newSize = based === 'height' ? size * hscale : size * wscale;

    if (isAndroid()) {
        return `${Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2}px`;
    }

    return `${Math.round(PixelRatio.roundToNearestPixel(newSize))}px`;
});
