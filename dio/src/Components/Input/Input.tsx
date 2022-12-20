import React from 'react';
import { IconContainer,InputContainer, InputText, ErrorText } from './styles';
import { Controller } from "react-hook-form";
import { IInput } from './type';

const Input = ( {leftIcon, name, control, errorMessage,...rest}: IInput) => {
    return (
      <>
      <InputContainer>
            {leftIcon ? (<IconContainer>{ leftIcon }</IconContainer>) : null }
            <Controller 
              name={name}
              control={control}
              rules={{ required: true }}
              render={({ field }) => <InputText { ...field }{ ...rest } />}
              />       
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null }
      </>
    )
  }
export { Input };