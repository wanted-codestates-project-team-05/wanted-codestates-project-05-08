import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { checkErrorStatus, getRecreationForestData } from '../service/api';

const Sample = () => {
  const [recreationForest, setRecreationForest] = useState([]);
  //데이터 불러오고 return 값 이용
  const getDataUseReturnValue = async () => {
    const response = await getRecreationForestData(1, 10).catch((error) => {
      checkErrorStatus(error);
    });
    console.log(response, 'getDataUseReturnValue');
    return response;
  };
  //데이터 불러온 후 상태 변경
  const getDataChangeState = useCallback(async () => {
    await getRecreationForestData(1, 10)
      .then((response) => setRecreationForest(response.data))
      .catch((error) => {
        checkErrorStatus(error);
      });
  }, []);
  return (
    <div>
      <BigText>Sample</BigText>
      <MiddleText>Sample</MiddleText>
      <SmallText>Sample</SmallText>
      <button onClick={getDataChangeState}>네트워크 요청 후 상태 변경</button>
      {console.log(recreationForest, 'recreationForest')}
      <button onClick={getDataUseReturnValue}>네트워크 요청 후 리턴값 이용</button>
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
