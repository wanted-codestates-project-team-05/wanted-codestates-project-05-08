import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Button = () => {
  return (
    <>
      <ButtonBox>
        <span>+</span>
      </ButtonBox>
    </>
  );
};

const ButtonBox = styled.button`
  display: inline-block;
  position: fixed;
  bottom: 50px;
  right: 60px;
  width: ${({ theme }) => theme.fontSizes.big};
  height: ${({ theme }) => theme.fontSizes.big};
  margin: 0 auto;
  border-radius: 50%;
  line-height: ${({ theme }) => theme.fontSizes.big};
  font-size: ${theme.fontSizes.big};
  background-color: ${theme.colors.darkBlue};
  color: #fff;
  cursor: pointer;
  z-index: 10;
  padding: 0;
`;

export default Button;
