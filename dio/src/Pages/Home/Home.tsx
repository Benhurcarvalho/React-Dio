import { useNavigate } from 'react-router-dom';
import {Button} from '../../Components/Button/Button';
import Header from '../../Components/Header/Header';
import { Container, TextContent, Title, TitleHightLight } from './styles';

const Home = () => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
      navigate('login')
    }

    const imgStyle = {
      height: '500px'
    };
    return (
      <div>
        <Header />
        <Container>
          <div>
              <Title>
                <TitleHightLight>
                  Implemente <br />
                </TitleHightLight>
                  o seu futuro global agora!
              </Title>
              <TextContent>
                Conquiste o seu espaço no mercado de tecnologia com o Inter.
              </TextContent>
              <Button title='Começar agora' variant='secondary' onClick={ handleClickSignIn } />
          </div>
          <div>
              <img style={ imgStyle } src="https://hermes.digitalinnovation.one/files/assets/e41313e0-53f7-4306-8791-09ca800fb469.png" alt="imagem principal" />
          </div>
        </Container>
      </div>
    )
  }

export default Home;
