import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../constans/routes";
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const HeaderStyled = styled.div`
position: fixed;
display: flex;
padding: 0px 60px;
top: 0px;
width: 100%;
height: 40px;  
background-color: #5f5f5f;
`
const LinkStyled = styled(NavLink)`
height:100%;
font: 18px arial, sans-serif;
text-decoration: none;
color: #f1f1f1;
line-height: 40px;
padding: 0px 10px;
&:hover {
    background-color: #000000;
    color: white;
  }
&.active { 
    background-color: #4CAF50;
    color: white;
   }
`

export class Header extends React.Component {
    render() {
        return (
            <HeaderStyled>
                {routes.map((route) =>
                    <LinkStyled key={route.path} to={route.path}>{route.label}</LinkStyled>
                )}
            </HeaderStyled>
        )
    }
};