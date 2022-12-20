import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 30;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #fff;
`

export const TitleHightLight = styled.samp`
    color: #e4700a
`

export const TextContent = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;

    color: #fff;
`