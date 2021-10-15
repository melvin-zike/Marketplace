import React from 'react'
import "./hero.css";
import { popularProducts } from '../../data';

const Hero = () => {
    return (
        <div className="feed">
          <div className="feedWrapper">
            <img style={{width: "700px", height: "370px"}} className="heroImg" src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          </div>
          
        </div>
      );
}

export default Hero
