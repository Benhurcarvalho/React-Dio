
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { api } from '../../services/api';

import {Button} from '../../Components/Button/Button';
import Header from '../../Components/Header/Header';
import { Input } from '../../Components/Input/Input';
import { 
  Column,
  Container,
  LoginText,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from './styles';
import { IFormData } from './types';

const schema = yup.object({
  name: yup.string().min(3, 'Digite pelo menos 3 caracteres').required('campo obrigatório'),
  email: yup.string().email('email não é válido').required('campo obrigatório'),
  password: yup.string().min(3, 'Digite pelo menos 3 caracteres').required('campo obrigatório'),
}).required('campo obrigatório');

const Register = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange', 
  });

  console.log(isValid, errors);

  const onSubmit = async (FormData: IFormData) => {
    try{
      const { data } = await api.get(`users?email=${FormData.email}&senha=${FormData.password}`)
      if(data.length === 1) {
        navigate('/feed')
      } else {
        alert('Email ou senha inválido')
      }
      console.log('retorno da api', data)
    }catch {
      alert('Ops, algo deu errado. Tente novamente')
    }
  };

    return (
      <div>
        <Header />
        <Container>
          <Column>
              <Title>
                  A plataforma para você aprender com experts, 
                  dominar as principais tecnologias e entrar mais 
                  rápido nas empresas mais desejadas.
              </Title>
              
          </Column>
          <Column>
              <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubTitleLogin>Crie sua conta e make the change.</SubTitleLogin>
                <form onSubmit={handleSubmit(onSubmit)} >
                  <Input name='name' errorMessage={errors?.name?.message} placeholder='Nome completo' control={control} />
                  <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder='E-mail' />
                  <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder='senha' type='password' />
                  <Button 
                  title='Criar minha conta'
                  variant='secondary'                  
                  type="submit"
                  />
                </form>
                <br/>
                <Column>
                  Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                  <br/>
                  <Row>                    
                  <EsqueciText>Já tenho conta. </EsqueciText>
                  <LoginText>Fazer login</LoginText>
                  </Row>
                </Column>
              </Wrapper>
          </Column>
        </Container>
      </div>
    )
  }

export default Register;
