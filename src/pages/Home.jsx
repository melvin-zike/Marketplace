import React from 'react'
import "./home.css"
import Announce from '../components/Announce'
import AutoplaySlider from '../components/AutoplaySlider'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Sidebar from '../components/sidebar/Sidebar'
import Rightbar from '../components/rightbar/Rightbar'
import Hero from '../components/hero/Hero'
import Packages from '../components/packages/Packages'

const Home = () => {
    return (
        
        <div className="home-page">
            
            <Announce />
            <Navbar />
            <div className = "homeContainer">
            <Sidebar />
            <Hero />
            <Rightbar />
            </div>
            <Packages />
            <Products />
            <Categories />
            <Slider />
            <Newsletter />
            <Footer />

           
        </div>
    )
}

export default Home
