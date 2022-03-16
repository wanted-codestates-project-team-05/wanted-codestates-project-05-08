import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { formActions } from '../store/form-slice';

const dummyData = [
  {
    id: 'd1',
    name: '속리산숲체험휴양마을',
    address: '충청북도 보은군 속리산면 속리산로 596',
    number: '043-540-3220',
    memo: '첫번째',
  },
  {
    id: 'd2',
    name: '속리산숲체험휴양마을2',
    address: '충청북도 보은군 속리산면 속리산로 596',
    number: '043-540-3220',
    memo: '두번째',
  },
];

const Sample = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.form);
  console.log(data);

  const addHandler = () => {
    dispatch(
      formActions.addItem({
        id: dummyData[0].id,
        name: dummyData[0].name,
        address: dummyData[0].address,
        number: dummyData[0].number,
        memo: dummyData[0].memo,
      })
    );
  };

  const editHandler = () => {
    dispatch(
      formActions.editItem({
        id: dummyData[0].id,
        memo: '수정',
      })
    );
  };

  const removeHandler = () => {
    dispatch(formActions.removeItem(dummyData[0].id));
  };

  return (
    <div>
      <BigText>Sample</BigText>
      <MiddleText>Sample</MiddleText>
      <SmallText>Sample</SmallText>
      <Button onClick={addHandler}>삽입</Button>
      <Button onClick={editHandler}>수정</Button>
      <Button onClick={removeHandler}>삭제</Button>
    </div>
  );
};

export default Sample;

const Button = styled.button`
  border: 1px solid black;
`;

const BigText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.big};
`;

const MiddleText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.middle};
`;

const SmallText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
