import React from 'react';
import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture,
} from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://media-exp1.licdn.com/dms/image/C5616AQGpedhICuozqw/profile-displaybackgroundimage-shrink_200_800/0/1605638330077?e=2147483647&v=beta&t=4ESDkEIZNSoP-cwM6VMjrOQHVD4vyQPloR1nAT5vFrk'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/108159316?v=4'/>
                <div>
                    <h4>Ben-Hur Carvalho</h4>
                    <p>Há 20 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para HTML e CSS</h4>
                <p>Projeto feito com React para o <strong>OrangeTech</strong> pela Dio!</p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JS</h4>
                <p>
                    10 likes
                </p>
            </HasInfo>
        </Content>
      
    </CardContainer>
  )
}

export default Card;
