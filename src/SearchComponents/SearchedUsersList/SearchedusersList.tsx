import { FC } from "react";
import { ISearchedUsersList } from "../../Interfaces/searchRelatedInterfaces";

const SearchedUsersList: FC<ISearchedUsersList> = ({ searchedUsers }) => {
  return <ol>{searchedUsers}</ol>;
};

export default SearchedUsersList;
