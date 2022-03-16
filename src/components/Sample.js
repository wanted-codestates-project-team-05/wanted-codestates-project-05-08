import React from 'react';
import styled from 'styled-components';
import { getRecreationForestData } from '../service/recreationForestApi';

const Sample = () => {
  const getData = async () => {
    const data = await getRecreationForestData(1, 10);
    console.log(data, 'data');
  };
  getData();
  return (
    <div>
      <BigText>Sample</BigText>
      <MiddleText>Sample</MiddleText>
      <SmallText>Sample</SmallText>
    </div>
  );
};

export default Sample;

const BigText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.big};
`;

const MiddleText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.middle};
`;

const SmallText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
