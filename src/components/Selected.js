import React, { useState } from 'react';
import styled from 'styled-components';

const sortOptionList = [{ name: '이름' }, { name: '주소' }, { name: '메모' }];

const Selected = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [choiceSelect, setChoiceSelect] = useState('이름');
  const handleChangeSelected = (e) => {
    if (e.target.textContent === '이름') {
      props.setSearchkey('name');
    } else if (e.target.textContent === '주소') {
      props.setSearchkey('address');
    } else if (e.target.textContent === '메모') {
      props.setSearchkey('memo');
    }
    setChoiceSelect(e.target.textContent);
    setIsSelected(!isSelected);
  };
  return (
    <Select>
      <button
        onClick={() => {
          setIsSelected(!isSelected);
        }}
      >
        {choiceSelect}
        <span className={isSelected === false ? 'dropdown-arrow' : 'dropdown-arrow up'}></span>
      </button>
      <ul className="selected-list">
        {isSelected &&
          sortOptionList.map((it, idx) => (
            <li key={idx} onClick={handleChangeSelected}>
              <div>{it.name}</div>
            </li>
          ))}
      </ul>
    </Select>
  );
};

const Select = styled.div`
  width: 29%;
  height: 50px;
  border: none;
  padding-left: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  button {
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
    line-height: 40px;
    text-align: left;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray};
    .dropdown-arrow {
      border-color: #999 transparent transparent;
      border-style: solid;
      border-width: 5px 5px 0;
      content: ' ';
      display: block;
      height: 0;
      margin-top: -ceil(2.5);
      position: absolute;
      right: 10px;
      top: 22px;
      width: 0;
      transition: transform 0.3s ease;
    }
    .dropdown-arrow.up {
      transform: rotate(-180deg);
    }
  }
  .selected-list {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    margin-top: 10px;
    margin-left: -5px;
    z-index: 10;
    li {
      background-color: #fff;
      font-size: 16px;
      padding-left: 5px;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      &:not(:last-child) {
        border-bottom: 1px solid #ddd;
      }
      &:hover {
        background-color: #ddd;
      }
    }
  }
`;

export default Selected;
