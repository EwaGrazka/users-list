import React, { useEffect, useState } from 'react';
import './MainView.scss';

const MainView = () => {
  const [usersList, setUsersList] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsersList(data))
  }, [setUsersList]);

  return (
    <div className="main-view-container">
      <h1>Users list</h1>
      <input placeholder="Search by user name" />
      <ol>
        {usersList?.map((user) => (
          <li><span className="user-name">{user.name}</span><span className="user-username">{`@${user.username}`}</span></li>
        ))}
      </ol>
    </div>
  )
};

export default MainView;
