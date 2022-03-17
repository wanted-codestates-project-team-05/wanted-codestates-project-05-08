import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();

  const handleClickRoute = () => {
    navigate('/list');
  };

  return (
    <ButtonBox onClick={handleClickRoute}>
      <div>+</div>
    </ButtonBox>
  );
};

const ButtonBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.fontSizes.big};
  height: ${({ theme }) => theme.fontSizes.big};
  border-radius: 50%;
  font-size: ${theme.fontSizes.big};
  background-color: ${theme.colors.darkGreen};
  color: #fff;
  cursor: pointer;
  padding: 0;
`;

export default Button;
