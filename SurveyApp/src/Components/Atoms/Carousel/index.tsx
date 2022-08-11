import React, { Children, forwardRef, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components/native';
import { normalize } from '@Utils';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface CarouselProps {
    children: React.ReactNode[];
}

interface CarouselRef {
 scrollTo: (pageNumber: number) => void;
}

const Container = styled.View`
  width: 100%;
  overflow: hidden;
`

const TransformerContainer = styled(Animated.View)`
  display: flex;
  flex-direction: row;
`

const CarouselItem = styled(Animated.View)`
  padding: 0 ${normalize(5)}; 
  width: 100%;
`

const Carousel = forwardRef<CarouselRef, React.PropsWithChildren<CarouselProps>>(({ children }, ref) => {
    const arrayChildren = Children.toArray(children);
    const itemWidth = useRef<number>();
    const translateX = useSharedValue(0);

    useImperativeHandle(ref, () => ({
        scrollTo: (pageNumber: number) => {
            translateX.value = withTiming((pageNumber * (itemWidth.current || 0) * -1))
        }
    }), [translateX]);

    const transformContainerStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    }, [translateX])

    return <Container>
        <TransformerContainer style={ transformContainerStyle }>
            {
                Children.map(arrayChildren, (child) => <CarouselItem onLayout={ (event) => {
                    itemWidth.current = event.nativeEvent.layout.width
                } }>{ child }</CarouselItem>)
            }
        </TransformerContainer>
    </Container>
});

export default Carousel;
