export const getRecreationForestData = async (page, perPage) => {
  const axios = require('axios');
  const config = {
    method: 'get',
    url: `https://api.odcloud.kr/api/15099285/v1/uddi:57e7fc08-b32c-482d-8dc7-ab02864a70b7?page=${page}&perPage=${perPage}&serviceKey=${process.env.REACT_APP_API_KEY}`,
    //인증 정보 오류 text url
    // url: `https://api.odcloud.kr/api/15099285/v1/uddi:57e7fc08-b32c-482d-8dc7-ab02864a70b7?page=${page}&perPage=${perPage}&serviceKey=`,
  };
  const response = await axios(config);
  return response.data;
};

export const checkErrorStatus = (error) => {
  const errorString = JSON.stringify(error);
  const errorObject = JSON.parse(errorString);
  let errorText = '';
  if (errorObject.status === 401) {
    errorText = '인증 정보 오류 :(';
  } else if (errorObject.status === 500) {
    errorText = '서버 문제 발생 :(';
  }
  return errorText;
};
