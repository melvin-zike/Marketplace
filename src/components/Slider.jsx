import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { useState } from "react";
import { sliderItems } from '../data';

const Container = styled.div`
width: 75%;
margin: auto;
margin-bottom: 20px;
height: 400px;
display: flex;
overflow: hidden;
position: relative;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #C3EB78;
border=radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`

const Wrapper = styled.div`
 height: 100%;
 display: flex;
 transition: all 1.5s ease;
 transform: translateX(${(props) => props.slideIndex * -100}vw); 
`
const Slide = styled.div`
 display: flex;
 align-items: center;
 width: 100vw;
 height: 100vh;
 background-color: #${props=>props.bg};
`
const ImageContainer = styled.div`
height: 80%;

`
const Image = styled.img`
height: 70%;
flex: 1;

`
const InfoContainer = styled.div`
flex: 1;
padding: 50px;

`
const Title = styled.h1`

`
const Description = styled.p`
  

`
const Button = styled.button`
 padding: 10px;
 font-size: 20px;
 background-color: transparent;
 cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState();
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        } else { 
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}> 
                {sliderItems.map(item => (
                        <Slide bg={item.bg } key={item.id}>
                        <ImageContainer>
                         <Image src={item.img} />
                         </ImageContainer>
                         <InfoContainer>
                             <Title>{item.title}</Title>
                             <Description>{item.desc}</Description>
                             <Button>SHOP NOW</Button>
                         </InfoContainer>
                     </Slide>
                ))}
                
              
            </Wrapper>
            <Arrow  direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
            
        </Container>
    )
}

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}


export default Slider
