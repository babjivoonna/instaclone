import React from 'react';
import { useNavigate } from 'react-router-dom';
import './feed.scss'

const Feed = () => {
  const nav = useNavigate();
  let posts;
  if (!(sessionStorage.userLoggedIn)) {
    nav('/signin')
  } else {
    posts = JSON.parse(localStorage.users);
  }


  return (
    <main className='feed'>
      {posts && posts.map((post) => {
        return (
          <img src={post.urls.small} alt='' key={post.id} />
        )
      })}

    </main>
  )
}

export default Feed