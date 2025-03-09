import './Header.css';
import React from 'react';
import NavBar from './componentsHeader/navBar/NavBar'
import Slideshow from './componentsHeader/slideshow/Slideshow'


export default function Header() {
    return (
        <>
            <NavBar />
            <Slideshow />
        </>
    )
}