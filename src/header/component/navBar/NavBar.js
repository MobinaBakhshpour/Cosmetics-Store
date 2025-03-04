import './NavBar.css'
import React from 'react'
import { BsBag, BsSearch, BsPerson } from "react-icons/bs";
import { Form, InputGroup, ButtonToolbar } from 'react-bootstrap';

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="rightSection">
                <img src="imgs/logo.png" alt="" className="logo" />
                <a href="" className="menuTitle"> خانه  </a>
                <a href="" className="menuTitle">  درباره ما </a>
                <a href="" className="menuTitle"> وبلاگ  </a>
            </div>


            <div className="leftSection">
                <div className="search__container">
                    <input className="search__input" type="text" placeholder=""/>
                </div>
                <div className='basketIcon'><BsBag /></div>
                <div className='userIcon'><BsPerson /></div>

            </div>
        </div>
    )
}
