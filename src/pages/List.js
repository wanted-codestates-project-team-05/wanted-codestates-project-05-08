import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router';
import { getRecreationForestData, checkErrorStatus } from '../service/api';

const List = ({ handleToast }) => {
  const navigate = useNavigate();
  const loadRef = useRef(null);
  const observerRef = useRef(null);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [singleData, setSingleData] = useState();

  const getItem = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getRecreationForestData(page, 10);
      const info = res.data;
      if (info.length) {
        setTimeout(() => {
          setData((prev) => [...prev, ...info]);
          setIsLoading(false);
        }, 1000);
      } else {
        loadRef.current.style.display = 'none';
      }
    } catch (err) {
      setError(checkErrorStatus(err));
      setTimeout(() => {
        setError('');
        loadRef.current.style.display = 'none';
        setIsLoading(false);
      }, 3000);
    }
  }, [page]);

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
    if (loadRef.current) {
      observerRef.current = new IntersectionObserver(onIntersect, {
        rootMargin: '-100px',
        threshold: 1,
      });
      observerRef.current.observe(loadRef.current);
    }
    return () => observerRef.current && observerRef.current.disconnect();
  }, [onIntersect]);

  const handleSingleData = (data) => {
    setSingleData(data);
    setIsModal(true);
  };

  return (
    <Container>
      {isModal && <Modal openModal={setIsModal} data={singleData} isModify={false} handleToast={handleToast} />}
      <Header className="head">
        <Button onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 256c0 141.4 114.6 256 256 256s256-114.6 256-256c0-141.4-114.6-256-256-256S0 114.6 0 256zM246.1 129.2C252.1 131.7 256 137.5 256 144v64h96c17.67 0 32 14.33 32 32v32c0 17.67-14.33 32-32 32h-96v64c0 6.469-3.891 12.31-9.875 14.78c-5.984 2.484-12.86 1.109-17.44-3.469l-112-112c-6.248-6.248-6.248-16.38 0-22.62l112-112C233.3 128.1 240.1 126.7 246.1 129.2z" />
          </svg>
        </Button>
      </Header>
      <ItemBox>
        {data?.map((item, index) => {
          return (
            <Item key={index} onClick={() => handleSingleData(item)}>
              <Content>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M413.8 447.1L256 448l0 31.99C256 497.7 241.8 512 224.1 512c-17.67 0-32.1-14.32-32.1-31.99l0-31.99l-158.9-.0099c-28.5 0-43.69-34.49-24.69-56.4l68.98-79.59H62.22c-25.41 0-39.15-29.8-22.67-49.13l60.41-70.85H89.21c-21.28 0-32.87-22.5-19.28-37.31l134.8-146.5c10.4-11.3 28.22-11.3 38.62-.0033l134.9 146.5c13.62 14.81 2.001 37.31-19.28 37.31h-10.77l60.35 70.86c16.46 19.34 2.716 49.12-22.68 49.12h-15.2l68.98 79.59C458.7 413.7 443.1 447.1 413.8 447.1z" />
                  </svg>
                  {item['휴양림_명칭']}
                </p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M511.8 287.6L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L416 100.7V64C416 46.33 430.3 32 448 32H480C497.7 32 512 46.33 512 64V185L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6L511.8 287.6z" />
                  </svg>
                  {item['휴양림_주소']}
                </p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
                  </svg>
                  {item['전화번호']}
                </p>
              </Content>
            </Item>
          );
        })}
      </ItemBox>
      {error && (
        <FeedBackWrap>
          <ErrorFeedBack>{error}</ErrorFeedBack>
        </FeedBackWrap>
      )}
      <Load ref={loadRef}>{isLoading && !error && <Circle />}</Load>
    </Container>
  );
};

const Button = styled.button`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 9999px;
  border: 10px solid gray;
  border-bottom: 10px solid blue;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } ;
`;

const Container = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  font-size: ${({ theme }) => theme.fontSizes.small};
  max-width: 800px;
  padding: 2rem;
  gap: 10px;
  margin: auto;
  display: flex;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-items: flex-start;
  font-size: ${({ theme }) => theme.fontSizes.big};
`;

const ItemBox = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
`;

const Item = styled.li`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.darkGreen};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  svg {
    width: 20px;
    height: 100%;
    margin-right: 10px;
    fill: ${({ theme }) => theme.colors.darkGreen};
  }
`;

const Load = styled.div`
  height: 100px;
`;

const FeedBackWrap = styled.div`
  width: 100%;
  animation: fade-in 3s;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  } ;
`;

const feedBackStyle = css`
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: center;
`;

const ErrorFeedBack = styled.div`
  ${feedBackStyle};
  background-color: ${({ theme }) => theme.colors.red};
`;

export default List;
