import { FC } from "react";
import { ISearchTitle } from "../../Interfaces/searchRelatedInterfaces";

const SearchTitle: FC<ISearchTitle> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default SearchTitle;
