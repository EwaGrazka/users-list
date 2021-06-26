import React, { useEffect, useState } from 'react';
import SearchedUsersList from '../SearchComponents/SearchedUsersList/SearchedusersList';
import SearchInput from '../SearchComponents/SearchInput/SearchInput';
import SearchTitle from '../SearchComponents/SearchTitle/SearchTitle';
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
  console.log(search)
  return (
    <div className="main-view-container">
      <SearchTitle title="Users list" />
      <SearchInput onSearch={search} placeholder="Search by user name" type="search" />
      <SearchedUsersList searchedUsers={searchedUsers} />
    </div>
  )
};

export default MainView;