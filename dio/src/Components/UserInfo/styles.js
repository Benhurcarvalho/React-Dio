import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    background-color: rgba(0, 0, 0, 0.56);
    border-radius: 20px;
    padding: 3px;

`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin-right: 12px;
`

export const NameText = styled.img`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #fff;
    background-color: #fff;

`

export const Progress = styled.div`
    width: 180px;
    height: 6px;
    border-radius: 3px;
    background-color: #fff;
    position: relative;
    

    &:after {
        content: '';
        position:absolute;
        top: 0;
        left: 0;
        width: ${ ({percentual}) => percentual }%;
        height: 6px;
        border-radius: 3px;
        background-color: #23dd7a;
    }
`