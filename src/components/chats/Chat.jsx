import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './chat.scss';
import LeftAside from './LeftAside/LeftAside';
import Messaging from './messaging/Messaging';

export default function Chat() {
    const nav = useNavigate();
    if (!(sessionStorage.userLoggedIn)) {
        nav('/signin');
    }

    let [currentUser, setCurrentUser] = useState({
        name: '',
        profilePic: '',
        username: '',
        chat: []
    })

    return (
        <main className='chat'>
            <LeftAside setCurrentUser={setCurrentUser} />
            <Messaging currentUser={currentUser} />
        </main>
    )
}