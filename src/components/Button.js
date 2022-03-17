import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();

  const handleClickRoute = () => { 
    navigate('/list');
  }

  return (
    <>
      <ButtonBox onClick={handleClickRoute}>
        <span>+</span>
      </ButtonBox>
    </>
  );
};

const ButtonBox = styled.button`
  display: inline-block;
  position: sticky;
  bottom: 70px;
  left: calc(100% - 40px);
  width: ${({ theme }) => theme.fontSizes.big};
  height: ${({ theme }) => theme.fontSizes.big};
  margin: 0 auto;
  border-radius: 50%;
  line-height: ${({ theme }) => theme.fontSizes.big};
  font-size: ${theme.fontSizes.big};
  background-color: ${theme.colors.darkGreen};
  color: #fff;
  cursor: pointer;
  z-index: 10;
  padding: 0;
`;

export default Button;
