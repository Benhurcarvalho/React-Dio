
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Button from '../../Components/Button/Button';
import Header from '../../Components/Header/Header';
import { Input } from '../../Components/Input/Input';
import { 
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from './styles';

const schema = yup.object({
  email: yup.string().email('email não é válido').required('campo obrigatório'),
  password: yup.string().min(3, 'Digite pelo menos 3 caracteres').required('campo obrigatório'),
}).required('campo obrigatório');

const Login = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', 
  });

  console.log(isValid, errors);

  const onSubmit = data => console.log(data);

  const handleClickSignIn = () => {
    navigate('/feed')
  }

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
                <TitleLogin>Faça o seu cadastro</TitleLogin>
                <SubTitleLogin>Faça o seu login e make the change</SubTitleLogin>
                <form onSubmit={handleSubmit(onSubmit)} >
                  <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder='E-mail' />
                  <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder='senha' type='password' />
                  <Button 
                  title='Entrar'
                  variant='secondary'
                  
                  type="submit"
                  />
                </form>
                <Row>
                  <EsqueciText>Esqueci minha senha</EsqueciText>
                  <CriarText>Criar Conta</CriarText>
                </Row>
              </Wrapper>
          </Column>
        </Container>
      </div>
    )
  }

export default Login;
