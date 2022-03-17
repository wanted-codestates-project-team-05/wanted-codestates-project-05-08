import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { BsFillPhoneVibrateFill, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { GiBurningForest } from 'react-icons/gi';
import { FaAddressCard } from 'react-icons/fa';
import { useToastState } from '../hooks/useToastState';
import { useDispatch } from 'react-redux';
import { formActions } from '../store/form-slice';
import { useNavigate } from 'react-router-dom';
function Modal({ openModal, isModify, data }) {
  const navigation = useNavigate();
  console.log(data);
  const [inputValue, setInputValue] = useState('');
  const modalRef = useRef(null);
  const inputRef = useRef(null);
  const handleToast = useToastState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.memo) setInputValue(data.memo);
  }, [data.memo]);
  const handleToastShow = (title, isSuccess) => {
    handleToast(title, isSuccess);
  };

  const changeHandle = (event) => {
    setInputValue(event.target.value);
  };
  const closeModal = (event) => {
    event.target === modalRef.current && openModal(false);
  };
  const handleKeyPress = (event) => {
    if (!isModify && inputValue && event.code === 'Enter') {
      handleSubmit();
    }
  };
  const handleSubmit = (e) => {
    if (inputValue) {
      const newData = {
        id: data.전화번호,
        name: data.휴양림_명칭,
        address: data.휴양림_주소,
        number: data.전화번호,
        memo: inputValue,
      };
      dispatch(formActions.addItem(newData));
      handleToastShow('저장을 성공하였습니다.', true);
      openModal(false);
      navigation('/');
    } else {
      handleToastShow('메모를 입력해주세요.', false);
    }
  };
  const handleDelete = () => {
    handleToastShow('삭제를 성공하였습니다.', true);
    console.log(data.id);
    dispatch(formActions.removeItem(data.id));
    // openModal(false);
  };
  const handleModify = () => {
    if (inputValue) {
      handleToastShow('수정을 성공하였습니다.', true);
      openModal(false);
    } else {
      handleToastShow('메모를 입력해주세요.', false);
    }
  };

  return (
    <Background ref={modalRef} onClick={closeModal}>
      <Wrapper>
        <NameBox>
          <Name>
            <GiBurningForest className="icon" />
            이름
          </Name>
          <Contents>{data.name ? data.name : data.휴양림_명칭}</Contents>
        </NameBox>
        <NameBox>
          <Name>
            <FaAddressCard className="icon" />
            주소
          </Name>
          <Contents>{data.address ? data.address : data.휴양림_주소}</Contents>
        </NameBox>
        <NameBox>
          <Name>
            <BsFillPhoneVibrateFill className="icon" />
            연락처
          </Name>
          <Contents>{data.number ? data.number : data.전화번호}</Contents>
        </NameBox>
        <Memo>
          <Name>
            <BsFillFileEarmarkTextFill className="icon" />
            메모
          </Name>
          <InputBox>
            <input
              ref={inputRef}
              onKeyPress={handleKeyPress}
              type="text"
              onChange={(e) => changeHandle(e)}
              value={inputValue}
              placeholder="내용을 입력해주세요"
            />
            <span className="focus-border"></span>
          </InputBox>
          <Footer>
            {!isModify ? (
              <button validate={inputValue} className="btn" onClick={handleSubmit}>
                저장
              </button>
            ) : (
              <>
                <button className="btn delete" onClick={handleDelete}>
                  삭제
                </button>
                <button className="btn" onClick={handleModify}>
                  수정
                </button>
              </>
            )}
          </Footer>
        </Memo>
      </Wrapper>
    </Background>
  );
}

export default Modal;

const Background = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;
const Wrapper = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn}
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  max-width: 700px;
  width: 80%;
  padding: 2.5rem 0;
  border-radius: 1rem;
  z-index: 998;
`;

const NameBox = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  width: 90%;
  margin-bottom: 1.3rem;
  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xxSmall};
  }
`;
const Name = styled.h1`
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.xxSmall};
  .icon {
    margin-right: 0.2rem;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;
const Contents = styled.div`
  font-weight: 700;
`;
const Memo = styled.div`
  width: 90%;
`;
const InputBox = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  input {
    font-size: ${({ theme }) => theme.fontSizes.xSmall};
    width: 100%;
    height: 2rem;
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.xxSmall};
    }
  }
`;
const Footer = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  margin-top: 1rem;
  .btn {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    font-size: ${({ theme }) => theme.fontSizes.xSmall};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;
    line-height: 3rem;
    font-weight: 700;
    width: 100%;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.xSmall};
    }
    @media screen and (max-width: 414px) {
      font-size: ${({ theme }) => theme.fontSizes.xxSmall};
    }
  }
  .delete {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    margin-right: 1rem;
  }
`;
