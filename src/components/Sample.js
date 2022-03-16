import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { checkErrorStatus, getRecreationForestData } from '../service/api';

const Sample = () => {
  const [recreationForest, setRecreationForest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  //데이터 불러오고 return 값 이용
  const getDataUseReturnValue = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getRecreationForestData(1, 10);
      console.log(response.data, 'getDataUseReturnValue');
      setLoading(false);
      return response;
    } catch (error) {
      setError(checkErrorStatus(error));
      setLoading(false);
      setTimeout(() => {
        setError('');
      }, 1500);
    }
  }, []);
  //데이터 불러온 후 상태 변경
  const getDataChangeState = useCallback(async () => {
    try {
      setLoading(true);
      await getRecreationForestData(1, 10).then((response) =>
        setRecreationForest((recreationForest) => [...recreationForest, ...response.data])
      );
    } catch (error) {
      setError(checkErrorStatus(error));
      setTimeout(() => {
        setError('');
      }, 1500);
    }
    setLoading(false);
  }, []);
  return (
    <Wrap>
      {error && (
        <FeedBackWrap>
          <ErrorFeedBack>{error}</ErrorFeedBack>
        </FeedBackWrap>
      )}
      {loading && (
        <FeedBackWrap>
          <LoadingFeedBack>loading...</LoadingFeedBack>
        </FeedBackWrap>
      )}
      <Button onClick={getDataChangeState}>네트워크 요청 후 상태 변경</Button>
      {recreationForest.length > 0 && console.log(recreationForest, 'recreationForest')}
      <br />
      <Button onClick={getDataUseReturnValue}>네트워크 요청 후 리턴값 이용</Button>
    </Wrap>
  );
};

export default Sample;

const Wrap = styled.div`
  width: 100vw;
  padding: 20px 0;
  ${({ theme }) => theme.common.flexCenterColumn}
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  margin: 10px auto;
  padding: 10px;
  width: 80vw;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const FeedBackWrap = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100vw;
  animation: fade-in 0.3s;
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const feedBackStyle = css`
  margin: auto;
  padding: 10px;
  width: 80vw;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: center;
`;

const ErrorFeedBack = styled.div`
  ${feedBackStyle};
  background-color: ${({ theme }) => theme.colors.red};
`;

const LoadingFeedBack = styled.div`
  ${feedBackStyle};
  background-color: ${({ theme }) => theme.colors.blue};
`;
