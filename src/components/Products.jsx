import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  width: 75%;
  margin: auto;
  margin-bottom: 20px;
 
`

const Products = () => {
    return (
        <Container>
           {popularProducts.map((item) => (
                <Product item={item} key={item.id}/>
            ))} 
        </Container>
    )
}

export default Products
