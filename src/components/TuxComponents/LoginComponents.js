import styled, { css } from 'styled-components'
// import {Link} from 'react-router-dom'

export const TuxFlower = styled.img`
	width: 140px;
	z-index: 10;
    position: absolute;
    top: 100px;
	border-radius: 50%;
	box-shadow: 2px 2px 5px #dddddd;
`;

export const LoginBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 425px;
    height: 510px;
    background-color: var(--true-white);
    box-shadow: var(--common-shadow);
    border-radius: 10px;
    margin-top: 120px;


    ${props => props.wide && css`
      width: 785px;
      height: 625px;
    `}

    ${props => props.flexStart && css`
      justify-content: flex-start;
    `}
    
    ${props => props.signup && css`
        position: absolute;
        top: 150px;
    `}

    ${props => props.general && css`
        margin-top: 120px;
    `}
`;

export const GoogleG = styled.img`
    width: 35px;
    height: 35px;
    margin: 20px;
    `;

export const GoogleBox = styled.a`
    width: 343px;
    height: 80px;
    border-radius: 5px;
    background: linear-gradient(360deg, #F9F9F9 0%, rgba(255, 255, 255, 0) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    box-shadow: var(--common-shadow);
    text-decoration: none;
`;

export const SignIn = styled.p`
    font: 700 20px 'Roboto', sans-serif;
    /* line-height: 23.44px; */
    color: rgba(0,0,0,.54);
    margin-top: 15px;
`;




