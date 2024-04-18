import React from 'react';
import { useState } from "react";
import './header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    let linkStyles = {
        textDecoration: "none",
        color: 'white'
    }


    const [time, setTime] = useState({
        time: "",
        date: "",
    });
    setInterval(() => {
        setTime({
            time: new Date().toLocaleTimeString(),
            date: new Date().toDateString(),
        });
    }, 1000);

    return (
        <main className='header-class'>
            <header>
                <ul>
                    <li>
                        <Link style={linkStyles} to='/posts'><span>HOME</span></Link>
                    </li>
                    <li> <Link style={linkStyles} to='/feed'>FEED</Link></li>
                    <li> <Link style={linkStyles} to='/chats'>CHATS</Link></li>
                    <li> <Link style={linkStyles} to='/profile'>PROFILE</Link></li>
                </ul>
                <p>
                    <span>{time.date}</span>
                    <h3>{time.time}</h3>
                    </p>
            </header>

        </main>
    )
}