import React from 'react';
import {Button} from '../Button/Button';
import { IHeader } from './types';
import {
    BuscarInputContainer,
    Container,
    // Column,
    Input, 
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './Styles';

const Header = ({autenticado}: IHeader) => {

    const imgStyle = {
        height: '32px'
      };
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img style={ imgStyle } src='https://hermes.digitalinnovation.one/assets/diome/logo.svg' alt='Logo da Dio' />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null }
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/108159316?v=4' />
                    ) : (
                        <>
                            <MenuRight href='#'>Home</MenuRight>
                            <Button title='Entrar' />
                            <Button title='Cadastrar' />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
  }

export default Header;
