import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

const List = () => {
  const loadRef = useRef(null);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(
    `/api/15099285/v1/uddi:57e7fc08-b32c-482d-8dc7-ab02864a70b7?page=${page}&perPage=10&serviceKey=${process.env.REACT_APP_API_KEY}`
  );

  const getItem = useCallback(async () => {
    setIsLoading(true);
    const res = await axios.get(url);
    const info = res.data.data;
    if (info.length) {
      setData((prev) => [...prev, ...info]);
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
    setUrl(
      `/api/15099285/v1/uddi:57e7fc08-b32c-482d-8dc7-ab02864a70b7?page=${page}&perPage=10&serviceKey=${process.env.REACT_APP_API_KEY}`
    );
  }, [page]);

  useEffect(() => {
    let observer;
    if (loadRef.current) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 1,
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
                <p>{item['휴양림_명칭']}</p>
                <p>{item['휴양림_주소']}</p>
                <p>{item['전화번호']}</p>
              </Content>
            </Item>
          );
        })}
      </ItemBox>
      <div ref={loadRef}>{isLoading && <ReactLoading type={'spin'} color={'blue'} height={150} width={150} />}</div>
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
