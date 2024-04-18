import "./LeftAside.scss";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Avatar from '@mui/material/Avatar';
const LeftAside = ({ setCurrentUser }) => {
    let navigate = useNavigate();
    if (!(sessionStorage.userLoggedIn)) {
        navigate('/signin');
    }
    let user = JSON.parse(localStorage.user);
    let offlineUsers = JSON.parse(localStorage.users);
    let [filteredUsers, setFilteredUsers] = useState([]);
    let users = filteredUsers.length ? filteredUsers : offlineUsers;
    let searchInput;
    let [length, setLength] = useState(false);


    const filterUsers = (e) => {
        searchInput = e.target.value.toLowerCase();
        let check = offlineUsers.filter((e) => e.user.name.toLowerCase().includes(searchInput));
        check = check.map(JSON.stringify);
        check = Array.from(new Set(check)).map(JSON.parse);
        setFilteredUsers(check);
        setLength(check.length);

        if (!searchInput) {
            setLength(false);
        }
    }



    return (
        <main className="LeftAside">
            <header>
                <nav>
                    <Avatar className="user-Icon">{user.name.slice(0, 1).toUpperCase()}</Avatar>
                    <section>
                        <h1>{user.name.toUpperCase()}</h1>
                        <p>{user.email}</p>
                    </section>
                </nav>
                <article>
                    <EditOutlinedIcon />
                </article>
            </header>

            <div className="friendsList">
                <section className="leftsearch">
                    <SearchSharpIcon />
                    <input type="search" placeholder="Search Friends..." onChange={(event) => filterUsers(event)} />
                    {filteredUsers.length !== 0 && length !== 0 && <p>searching... "{length ? length : 0}" results Found</p>}{
                        length === 0 && <p> No results found</p>
                    }
                </section>
                <section className="chatList">
                    {users.map((user) => {
                        return (
                            <article>
                                <img src={user.user.profile_image.medium} alt="img" />
                                <div onClick={() => {
                                    setCurrentUser({
                                        name: user.user.name,
                                        profilePic: user.user.profile_image.medium,
                                        username: user.user.instagram_username,
                                        chat: []
                                    });
                                }}>
                                    <h1>{user.user.name}</h1>
                                    <p>{user.user.social.instagram_username}</p>
                                </div>
                            </article>
                        )
                    })}
                </section>
            </div>
        </main>
    )
}
export default LeftAside;