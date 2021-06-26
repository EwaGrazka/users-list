import { ChangeEventHandler } from "react";

export interface ISearchTitle {
  title: String;
}

export interface ISearchInput {
  onSearch: ChangeEventHandler;
  placeholder: string;
  type: string;
}

export interface ISearchedUsersList {
  searchedUsers: Array<String>;
}
