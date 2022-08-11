import React, { useEffect, useState } from 'react';
import { normalize } from '@Utils';
import { COLORS } from '@Config';
import Animated, {
    interpolate,
    interpolateColor,
    useAnimatedProps,
    useSharedValue,
    withRepeat,
    withSpring
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';
import styled from 'styled-components/native';

interface LoadingProps {
    children: React.ReactNode[] | React.ReactNode;
    isLoading: boolean;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${normalize(200)};
`

const Loading = ({ isLoading, children }: LoadingProps) => {
    const [loadingActive, setLoadingActive] = useState(isLoading);
    const animatedValue = useSharedValue(0);
    animatedValue.value = withRepeat(withSpring(1), 1000, true);


    const animatedCircleProps = useAnimatedProps(() => {
        const fill = interpolateColor(
            animatedValue.value,
            [0, 1],
            [COLORS.PRIMARY, COLORS.PRIMARY_LIGHT]
        );

        const r = interpolate(
            animatedValue.value,
            [0, 1],
            [10, 50]
        );

        return {
            fill,
            r,
        }
    }, [animatedValue])

    /**
     * Below use effect, just added to show animation for 2 seconds,
     * Normally, it's not needed
     */
    useEffect(() => {
        setTimeout(() => setLoadingActive(isLoading), 2000)
    }, [isLoading])

    if (loadingActive) {
        return (
            <Container>
                <Svg viewBox='1 -1 150 150' style={ { width: normalize(100), height: normalize(100) } }>
                    <AnimatedCircle
                        cx="75"
                        cy="75"
                        animatedProps={ animatedCircleProps }
                        stroke={ COLORS.PRIMARY }
                        strokeWidth="2.5"/>
                </Svg>
            </Container>
        );
    }

    return <>{children}</>;
};

export default Loading;
