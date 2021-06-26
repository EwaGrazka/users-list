import { FC } from "react";
import { ISearchInput } from "../../Interfaces/searchRelatedInterfaces";

const SearchInput: FC<ISearchInput> = ({ onSearch, placeholder, type }) => {
  return <input type={type} placeholder={placeholder} onChange={onSearch} />;
};

export default SearchInput;
