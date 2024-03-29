import React, { useState } from 'react';
import Selected from '../components/Selected';
import SearchInp from '../components/SearchInp';
import styled from 'styled-components';
import Button from '../components/Button';
import { useSelector } from 'react-redux';
import { FaHome, FaTree, FaPhone, FaStickyNote } from 'react-icons/fa';
import theme from '../theme';
import Modal from '../components/Modal';
const Home = ({handleToast}) => {
  const [searchkey, setSearchkey] = useState('name');
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [singleData, setSingleData] = useState();
  const dataList = useSelector((state) => state.form);
  const item = dataList.items.filter((it) => it[searchkey].includes(searchInputValue));
  const handleSingleData = (data) => {
    setSingleData(data);
    setIsModal(true);
  };
  return (
    <Container>
      {isModal && <Modal openModal={setIsModal} data={singleData} isModify={true} handleToast={handleToast} />}
      <Menu>
        <Selected setSearchkey={setSearchkey} />
        <SearchInp setSearchInputValue={(item) => setSearchInputValue(item)} />
      </Menu>
      {item.length === 0 && (
        <NoneList>
          <p className="none-txt">데이터가 <br />없습니다 :(</p>
        </NoneList>
      )}
      {item.length !== 0 && (
        <ul className="item-list">
          {item.map((it, index) => (
            <List key={index} onClick={() => handleSingleData(it)}>
              <div className="cont">
                <FaTree width={24} color={theme.colors.darkGreen} />
                <span className="cont-txt">{it.name}</span>
              </div>
              <div className="cont">
                <FaHome width={24} color={theme.colors.darkGreen} />
                <span className="cont-txt">{it.address}</span>
              </div>
              <div className="cont">
                <FaPhone width={24} color={theme.colors.darkGreen} />
                <span className="cont-txt">{it.number}</span>
              </div>
              <div className="cont">
                <FaStickyNote width={24} color={theme.colors.darkGreen} />
                <span className="cont-txt">{it.memo}</span>
              </div>
            </List>
          ))}
        </ul>
      )}
      <div className="btn-container">
          <Button />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  position: relative;
  padding: 2rem;
  margin: 0 auto;
  height: 100vh;
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fontSizes.small};
  .item-list {
    margin-top: 30px;
    width: 100%;
  }
  .btn-container {
    z-index: 10;
    align-self: end;
    flex: none;
    margin-top: auto;
    position: sticky;
    bottom: 60px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

const NoneList = styled.div`
  width: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  .none-txtnone-txt {
    text-align: center;
    font-size: 1.2rem;
    color: #2e2e2e;
  }
`;

const List = styled.li`
  padding: 1.7rem;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  cursor: pointer;
  .cont {
    font-size: 1rem;
    .cont-txt {
      vertical-align: 1px;
      line-height: 1.8;
      margin-left: 8px;
    }
  }
  &:not(:first-child) {
    margin-top: 20px;
  }
  &:last-child {
    margin-bottom: 20px;
  }
  &:hover {
    background-color: #d7e7de;
  }
`;

export default Home;
