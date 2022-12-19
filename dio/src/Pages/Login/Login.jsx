import { useNavigate } from 'react-router-dom';

import Button from '../../Components/Button/Button';
import Header from '../../Components/Header/Header';
import { 
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper 
} from './styles';

const Login = () => {
  const navigate = useNavigate();

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
                <form>
                  <input placeholder='E-mail' />
                  <input placeholder='senha' type='password' />
                  <Button 
                  title='Entrar'
                  variant='secondary'
                  onClick={handleClickSignIn}
                  type="button"
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
