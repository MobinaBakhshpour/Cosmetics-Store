import './NavBar.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
    let [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="navBar">
            <div className="rightSection">
                <Link to="/"><img src="imgs/logo.png" alt="" className="logo" /></Link>
                <Link to="/" className="menuTitle"> خانه  </Link>
                <Link to="" className="menuTitle">  درباره ما </Link>
                <Link to="" className="menuTitle"> وبلاگ  </Link>
            </div>


            <div className="leftSection">
                <div className="search__container">
                    <input className="search__input" type="text" placeholder="" />
                </div>
                <div className='basketIcon'><a href="#"><svg width={38} height={38} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 8.25A.75.75 0 0 0 3 9v10.125c0 1.418 1.207 2.625 2.625 2.625h12.75c1.418 0 2.625-1.149 2.625-2.566V9a.75.75 0 0 0-.75-.75H3.75Z" clipRule="evenodd" />
                    <path d="M7.5 8.25v-1.5a4.5 4.5 0 0 1 4.5-4.5v0a4.5 4.5 0 0 1 4.5 4.5v1.5" />
                </svg></a></div>
                <div className='isLogged'>
                    <a href="#">{isLoggedIn ? <svg className='userIcon' width={38} height={38} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.125 6.75c-.184 2.478-2.063 4.5-4.125 4.5-2.063 0-3.945-2.021-4.125-4.5-.188-2.578 1.64-4.5 4.125-4.5 2.484 0 4.312 1.969 4.125 4.5Z" /><path d="M12 14.25c-4.078 0-8.217 2.25-8.983 6.497-.092.512.197 1.003.733 1.003h16.5c.536 0 .826-.491.734-1.003C20.217 16.5 16.078 14.25 12 14.25Z" /></svg> : <button className='logInBts'> ورود | عضویت </button>}</a>
                </div>
            </div>
        </div>
    )
}
