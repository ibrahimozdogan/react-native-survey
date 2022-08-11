import React from 'react';
import styled from 'styled-components/native';
import { normalize } from '@Utils';
import { COLORS } from '@Config';

interface TextAreaProps {
    onChange: (value: string) => void;
    multiline?: boolean;
}

const ReactNativeTextInput = styled.TextInput`
  border: 1px solid ${COLORS.PRIMARY}
  padding: ${normalize(5)} ${normalize(10)};
  border-radius: ${normalize(2)};
  min-height: ${(props: TextAreaProps) => props.multiline ? normalize(100) : normalize()};
`

const TextInput = ({ onChange, multiline }: TextAreaProps) => {
    return (
        <ReactNativeTextInput onChangeText={ onChange } multiline={ multiline }  />
    );
};

export default TextInput;
