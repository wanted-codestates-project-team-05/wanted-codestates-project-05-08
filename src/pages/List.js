import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const List = () => {
  const loadRef = useRef(null);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(`/pubdata/pubMapForest.do?numOfRows=10&pageNo=${page}`);

  const getItem = useCallback(async () => {
    setIsLoading(true);
    const res = await axios.get(url);
    const info = res.data.body;
    if (info.response.length) {
      setData((prev) => [...prev, ...info.response]);
    } else {
      loadRef.current.style.display = 'none';
    }
    setIsLoading(false);
  }, [url]);

  const onIntersect = useCallback(
    (entry, observer) => {
      if (entry[0].isIntersecting && !isLoading) {
        observer.unobserve(entry[0].target);
        setPage((prev) => prev + 1);
      }
    },
    [isLoading]
  );

  useEffect(() => {
    getItem();
  }, [getItem]);

  useEffect(() => {
    setUrl(`/pubdata/pubMapForest.do?numOfRows=10&pageNo=${page}`);
  }, [page]);

  useEffect(() => {
    let observer;
    if (loadRef.current) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.5,
      });
      observer.observe(loadRef.current);
    }
    return () => observer && observer.disconnect();
  }, [onIntersect]);

  return (
    <Container>
      <header className="head">
        <button>{'<'}</button>
      </header>
      <ItemBox>
        {data?.map((item, index) => {
          return (
            <Item key={index}>
              <Content>
                <p>{item.fcNm}</p>
                <p>{item.fcAddr}</p>
                <p>{item.ref1}</p>
              </Content>
            </Item>
          );
        })}
      </ItemBox>
      <div ref={loadRef}>{isLoading && 'loading'}</div>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  font-size: ${({ theme }) => theme.fontSizes.small};
  max-width: 800px;
  .head {
    width: 100%;
    height: 25px;
    display: flex;
    justify-items: flex-start;
    font-size: ${({ theme }) => theme.fontSizes.big};
    button {
      cursor: pointer;
    }
  }
`;

const ItemBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 2rem;
`;

const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default List;
