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
    const info = JSON.parse(res.data);
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
        threshold: 0.4,
      });
      observer.observe(loadRef.current);
    }
    return () => observer && observer.disconnect();
  }, [onIntersect]);

  return (
    <div>
      <header></header>
      <ul>
        {data?.map((item, index) => {
          return (
            <li key={index}>
              <div>
                <p>{item.fcNm}</p>
                <p>{item.fcAddr}</p>
                <p>{item.ref1}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div ref={loadRef}>{isLoading && 'loading'}</div>
    </div>
  );
};

export default List;
