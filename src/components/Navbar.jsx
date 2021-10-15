import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
//using styled components
const Container = styled.div`
height: 60px;

`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #fff;
`
const Left = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
 font-weight: bold;
`
const Center = styled.div`
flex: 1;
`
const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Input = styled.div`
border: none;
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
padding-left: 15px;

`
const MenuLink = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`


const Navbar = () => {
    return (
        <Container>
          <Wrapper>
              <Left>
                  <Logo>Domot Market</Logo>
              </Left>
              <Center>
                  <Input />
               <SearchContainer>
                  <Search style={{color:"gray", fontSize:16}}/>
               </SearchContainer>
              </Center>
              <Right>
                  <MenuLink>Register</MenuLink>
                  <MenuLink>Login</MenuLink>
                  <MenuLink>
                  <Badge badgeContent={4} color="primary">
                      <ShoppingCartOutlined />
                  </Badge>
                  </MenuLink>
                  
              </Right>
          </Wrapper>
        </Container>
    )
}

export default Navbar
