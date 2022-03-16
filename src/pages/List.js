import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import Modal from '../components/Modal';
import { ToastList } from '../components/ToastList';

const List = () => {
  const loadRef = useRef(null);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [singleData, setSingleData] = useState();
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

  const handleSingleData = (data) => {
    console.log(data)
    setSingleData(data)
    setIsModal(true)
  }

  return (
    <Container>
    <ToastList/>
    {isModal && <Modal openModal={setIsModal} data={singleData}/>}
      <header className="head">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 256c0 141.4 114.6 256 256 256s256-114.6 256-256c0-141.4-114.6-256-256-256S0 114.6 0 256zM246.1 129.2C252.1 131.7 256 137.5 256 144v64h96c17.67 0 32 14.33 32 32v32c0 17.67-14.33 32-32 32h-96v64c0 6.469-3.891 12.31-9.875 14.78c-5.984 2.484-12.86 1.109-17.44-3.469l-112-112c-6.248-6.248-6.248-16.38 0-22.62l112-112C233.3 128.1 240.1 126.7 246.1 129.2z" />
          </svg>
        </button>
      </header>
      <ItemBox>
        {data?.map((item, index) => {
          return (
            <Item key={index} onClick={() => handleSingleData(item)}>
              <Content>
                <p>{item['휴양림_명칭']}</p>
                <p>{item['휴양림_주소']}</p>
                <p>{item['전화번호']}</p>
              </Content>
            </Item>
          );
        })}
      </ItemBox>
      <Load ref={loadRef}>{isLoading && <ReactLoading type={'spin'} color={'blue'} height={100} width={100} />}</Load>
    </Container>
  );
};

const Container = styled.div`
  font-family: fantasy;
  ${({ theme }) => theme.common.flexCenterColumn};
  font-size: ${({ theme }) => theme.fontSizes.small};
  max-width: 800px;
  padding: 2rem;
  gap: 10px;
  margin: auto;

  .head {
    width: 100%;
    height: 25px;
    display: flex;
    justify-items: flex-start;
    font-size: ${({ theme }) => theme.fontSizes.big};

    button {
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const ItemBox = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.black};
`;

const Item = styled.li`
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.darkGreen};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Load = styled.div`
  height: 100px;
`;

export default List;
