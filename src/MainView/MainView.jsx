import React, { useEffect, useState } from 'react';
import SearchedUsersList from '../SearchComponents/SearchedUsersList/SearchedusersList';
import SearchInput from '../SearchComponents/SearchInput/SearchInput';
import SearchTitle from '../SearchComponents/SearchTitle/SearchTitle';
import './MainView.scss';
import Spinner from '../Loader/Loader';

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
      usersToRender.map((userName) => <li key={userName.id}><span className="user-name">{userName.name}</span> <span className="user-username">{`@${userName.username}`}</span></li>)

    ) : (
      <p>No results. Please, try again.</p>
    );

  return (
    <div className="main-view-container">
      <div className="search-title-box">
        <SearchTitle title="Users list" />
      </div>
      <div className="search-input-box">
        <SearchInput onSearch={search} placeholder="Search by user name" type="search" />
      </div>
      <div className="searched-users-list-box">
        {users.length !== 0 ? <SearchedUsersList searchedUsers={searchedUsers} /> : <Spinner />}</div>
    </div>
  )
};

export default MainView;