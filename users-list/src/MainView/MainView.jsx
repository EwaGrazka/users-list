import React, { useEffect, useState } from 'react';
import './MainView.scss';

const MainView = () => {
  const [users, setusers] = useState([])
  const [currentUsers, setcurrentUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setusers(data))
  }, []);

  useEffect(() => {
    setcurrentUsers(users)
  }, [users]);

  const search = (e) => {
    const text = e.target.value;
    let usersFound = users;

    if (text) {
      usersFound = users.filter((user) => {
        return (
          user.name.toLowerCase().search(text.toLowerCase()) > -1
        );
      });
    }

    setcurrentUsers(usersFound);
  };


  const usersToRender = currentUsers.map((row) => row)

  const searchedUsers =
    usersToRender.length > 0 ? (
      usersToRender.map((userName) => <li><span className="user-name">{userName.name}</span> <span className="user-username">{`@${userName.username}`}</span></li>)

    ) : (
      <p>No results. Please, try again.</p>
    );
  return (
    <div className="main-view-container">
      <h1>Users list</h1>
      <input type="search" placeholder="Search by user name" onChange={search} />
      <ol>
        {searchedUsers}
      </ol>
    </div>
  )
};

export default MainView;





