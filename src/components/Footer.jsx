import { Facebook, Instagram, Mail, Phone, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-left: 40px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  

`
const Logo = styled.h1`
  
`
const Desc = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
`
const Right = styled.div`
   flex: 1;
   padding: 20px;
`
const ContactItem = styled.div`
 margin-bottom: 20px;
 display: flex;
 align-items: center;
`
const Payment = styled.img`
  width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    Domot Market
                </Logo>
                <Desc>
                    dfionoif ;hf dfn diofdiofdfio dofdfod do fof foefoe ife feofio e  eiheiofhe e ie eihe ef;ifiwefefbu f we f
                </Desc>
                <SocialContainer>
                    <SocialIcon color="385999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Site Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Furniture</ListItem>
                    <ListItem>Men's Fashion</ListItem>
                    <ListItem>Women's Fashion</ListItem>
                    <ListItem>Accesories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                <Room style={{marginRight: "10px"}}/> Shop 33, paco market, iyana itire...  
                </ContactItem>
                <ContactItem>
                <Phone style={{marginRight: "10px"}} /> 08149510410
                </ContactItem>
                <ContactItem>
                <Mail style={{marginRight: "10px"}}/> domotmarket@gmail.com 
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
