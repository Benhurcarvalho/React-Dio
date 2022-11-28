import React from 'react';
import { IconConainer,InputContainer, InputText } from './styles';

const Input = ( {leftIcon, name, ...rest}) => {
    return (
      <InputContainer>
            {leftIcon ? (<IconConainer>{ leftIcon }</IconConainer>) : null }
            <InputText { ...rest } />
      </InputContainer>
    )
  }
export { Input };
