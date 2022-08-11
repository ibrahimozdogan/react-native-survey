import { TouchableOpacity } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { normalize } from '@Utils';
import { COLORS, FONTS } from '@Config';
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';

interface OptionProps {
    value: any;
    label: string;
    isSelected: boolean;
    onPress: ({ value }: { value: string }) => void;
}

const Container = styled(Animated.View)`
  border: 2px solid ${(props: Pick<OptionProps, 'isSelected'>) => props.isSelected ? COLORS.PRIMARY : COLORS.PRIMARY_LIGHT};
  backgroundColor: ${(props: Pick<OptionProps, 'isSelected'>) => props.isSelected ? COLORS.PRIMARY_LIGHT : COLORS.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: ${normalize(10)} ${normalize(10)};
  margin: ${normalize(5)} 0
`

const Label = styled.Text`
  color: ${COLORS.PRIMARY};
  font-size: ${FONTS.SMALL};
`

const Checkmark = styled(Animated.Text)`
  color: ${COLORS.PRIMARY};
  width: ${normalize(20)};
  height: ${normalize(20)};
  text-align: center;
  font-size: ${FONTS.MEDIUM};
  position: absolute;
  left: ${normalize(5)}
`

const Option = ({ value, label, isSelected, onPress }: OptionProps) => {
    const progress = useDerivedValue(() => {
        return withTiming(isSelected ? 1 : 0, { duration: 500 })
    }, [isSelected]);

    const animatedContainerStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            progress.value,
            [0, 1],
            [COLORS.WHITE, COLORS.PRIMARY_LIGHT]
        );

        const borderColor = interpolateColor(
            progress.value,
            [0, 1],
            [COLORS.PRIMARY_LIGHT, COLORS.PRIMARY]
        );

        return {
            backgroundColor,
            borderColor,
        };
    }, [progress])

    const animatedCheckmarkStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: progress.value }]
        };
    }, [progress])


    return (
        <TouchableOpacity onPress={ () => {
            onPress(value)
        } } activeOpacity={ .7 }>
            <Container isSelected={ isSelected } style={ animatedContainerStyle }>
                <Checkmark style={ animatedCheckmarkStyle } >✓</Checkmark>
                <Label isSelected={ isSelected }>{label}</Label>
            </Container>
        </TouchableOpacity>
    );
};

export default Option;
