import styled from "styled-components";

export const CardContainer = styled.div`
    width: 97%;
    background-color: #1f192d;
    position: relative;
    margin-bottom: 24px;
    margin: 0 15px;
`

export const ImageBackground = styled.img`
    width: 100%;
    height: auto;

`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
    margin-top: 10%;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
    

        div {
            margin-left: 12px;
        }

        h4 {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
            color: #fff;
        }

        p {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: #fff;
        }
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #fff;

`

export const PostInfo = styled.div`
    margin-bottom: 12px;

    h4 {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #fff;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #fff;
    }
`

export const HasInfo = styled.div`
    margin-bottom: 12px;
    

        h4 {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 16px;
            color: #ffffff80;
        }

        p {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
            color: #ffffff80;
        }
`