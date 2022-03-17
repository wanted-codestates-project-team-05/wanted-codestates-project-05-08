import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import theme from '../theme';

const SearchInp = (props) => {
  const [search, setSearch] = useState('');
  const localSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchKeyup = (e) => {
    if (e.keyCode === 13) {
      props.setSearchInputValue(search);
    }
  };

  const handleClickSearch = () => {
    props.setSearchInputValue(search);
  };

  return (
    <>
      <Input placeholder="검색어를 입력하세요." value={search} onChange={localSearch} onKeyUp={handleSearchKeyup} />
      <SearchIcon onClick={handleClickSearch}>
        <FaSearch width={14} color={theme.colors.darkGreen} onClick={handleClickSearch} />
      </SearchIcon>
    </>
  );
};

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  padding-left: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 15px;
  cursor: pointer;
`;

export default SearchInp;
