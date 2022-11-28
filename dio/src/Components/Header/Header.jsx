import React from 'react';
import Button from '../Button/Button';
import {
    BuscarInputContainer,
    Container,
    // Column,
    Input, 
    Menu,
    MenuRight,
    Row,
    // UserPicture,
    Wrapper
} from './Styles';

const Header = () => {

    const imgStyle = {
        height: '32px'
      };
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img style={ imgStyle } src='https://hermes.digitalinnovation.one/assets/diome/logo.svg' alt='Logo da Dio' />
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title='Entrar' />
                    <Button title='Cadastrar' />
                </Row>
            </Container>
        </Wrapper>
    )
  }

export default Header;
