// import { Link } from 'react-router-dom';
// import Button from '../../Components/Button/Button';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/Card';
import UserInfo from '../../Components/UserInfo/UserInfo';
import { Container, Column, Title, TitleHightLight } from './styles';
import './index.css';

// TextContent, , 

const Feed = () => {
    return (
      <>
        <Header autenticado={ true }/>
        <Container>
          <Column flex={3} >
            <Title >Feed</Title>
            <Card />
            <Card />
            <Card />
          </Column>
          <Column flex={1} >
          <TitleHightLight># RANKING DA SEMANA</TitleHightLight>
          <br/>
          <br/>
          <UserInfo 
                image={ 'https://avatars.githubusercontent.com/u/108159316?v=4' }
                nome="Ben-Hur Carvalho"
                percentual={90}
                />
                <UserInfo 
                image={ 'https://avatars.githubusercontent.com/u/108159316?v=4' }
                nome="Ben Carvalho"
                percentual={89}
                />
                <UserInfo 
                image={ 'https://avatars.githubusercontent.com/u/108159316?v=4' }
                nome="Hur Carvalho"
                percentual={70}
                />
              <UserInfo 
                image={ 'https://avatars.githubusercontent.com/u/108159316?v=4' }
                nome="Carvalho"
                percentual={70}
                />
                <UserInfo 
                image={ 'https://avatars.githubusercontent.com/u/108159316?v=4' }
                nome="Ben-Hur Carvalho"
                percentual={50}
                />
                <UserInfo 
                image={ 'https://avatars.githubusercontent.com/u/108159316?v=4' }
                nome="Ben-Hur Carvalho"
                percentual={29}
                />  
          </Column>
          {/* <div className='card'>

          </div> */}
            {/* <div className='infoRank'>
            <UserInfo 
                image={ 'https://avatars.githubusercontent.com/u/108159316?v=4' }
                nome="Ben-Hur Carvalho"
                percentual={90}
                />
                <UserInfo 
                image={ 'https://avatars.githubusercontent.com/u/108159316?v=4' }
                nome="Ben Carvalho"
                percentual={89}
                />
                <UserInfo 
                image={ 'https://avatars.githubusercontent.com/u/108159316?v=4' }
                nome="Hur Carvalho"
                percentual={70}
                />
              <UserInfo 
                image={ 'https://avatars.githubusercontent.com/u/108159316?v=4' }
                nome="Carvalho"
                percentual={70}
                />
                <UserInfo 
                image={ 'https://avatars.githubusercontent.com/u/108159316?v=4' }
                nome="Ben-Hur Carvalho"
                percentual={50}
                />
                <UserInfo 
                image={ 'https://avatars.githubusercontent.com/u/108159316?v=4' }
                nome="Ben-Hur Carvalho"
                percentual={29}
                />      
            </div> */}
        </Container>
      </>
    )
  }

export default Feed;
