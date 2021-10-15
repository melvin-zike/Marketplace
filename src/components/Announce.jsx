import styled from "styled-components";

const Container = styled.div`
height: 40px;
background-color: #1A1D1A;
color:white;
display: flex;
align-items:center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

const Announce = () => {
    return (
        <Container>
            Super Discounts and Deals On All Items
        </Container>
    )
}

export default Announce
