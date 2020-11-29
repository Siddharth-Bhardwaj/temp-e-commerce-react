import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                <Link to='/'>
                    <LogoImg src={Logo} alt='store' className='navbar-brand' />
                </Link>

                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                            <i className='fas fa-cart-plus'></i>
                        </span>
                        Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const LogoImg = styled.img`
    height: 40px;
    width: 40px;
`;

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;
