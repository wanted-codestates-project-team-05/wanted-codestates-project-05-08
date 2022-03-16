import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const List = () => {
  const loadRef = useRef(null);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const url = `/pubdata/pubMapForest.do?numOfRows=10&pageNo=${page}`;

  const getItem = useCallback(async () => {
    const res = await axios.get(url);
    console.log(res.data);
  }, [url]);

  useEffect(() => {
    getItem();
  }, [getItem]);

  return (
    <div>
      <ul>
        <li></li>
      </ul>
      <div ref={loadRef}></div>
    </div>
  );
};

export default List;
