import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const NavContainer = styled.nav`
    position: absolute;
    top: ${({isOpen}) => isOpen ? '6.25rem' : '-100%'};
    left: 50%;
    transform: translateX(-50%);
    width: 90vw;
    max-width: 400px;
    padding: 2.5rem 1.5rem;
    background: var(--background-dark);
    border-radius: 10px;
    text-align: center;
    transition: all 300ms ease-in-out;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

export const MainLinksWrap = styled.div`
    margin-bottom: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgb(160 154 168 / 0.25);
    border-bottom: 1px solid rgb(160 154 168 / 0.25);
`;


export const MobileLinkWithin = styled(LinkS)`
    display: block;
    margin-bottom: 2rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #fff;
    text-decoration: none;
`;

export const MobileLink = styled(LinkR)`
    display: block;
    margin-bottom: 2rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #fff;
    text-decoration: none
`;

export const ButtonLink = styled(MobileLink)`
    width: 100%;
    margin: 0;
    padding: 0.75rem 0 0.625rem;
    background-color: var(--button-primary);
    border-radius: 1.75rem;
`;
