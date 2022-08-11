import { TouchableOpacity } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { normalize } from '@Utils';
import { COLORS, FONTS } from '@Config';

interface ButtonProps {
    label: string;
    onPress: () => void;
    disabled?: boolean;
}

const Container = styled.View`
  backgroundColor: ${(props: Pick<ButtonProps, 'disabled'>) => props.disabled ? COLORS.GRAY : COLORS.PRIMARY}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${normalize(5)} ${normalize(10)};
  margin: ${normalize(5)} 0;
  border-radius: ${normalize(10)};
`

const Label = styled.Text`
  color: ${COLORS.WHITE};
  font-size: ${FONTS.SMALL};
`

const Button = ({ label, onPress, disabled }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={ onPress } disabled={ disabled }>
            <Container disabled={ disabled }>
                <Label>{label}</Label>
            </Container>
        </TouchableOpacity>
    );
};

export default Button;
