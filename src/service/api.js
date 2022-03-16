export const getRecreationForestData = async (page, perPage) => {
  const axios = require('axios');
  const config = {
    method: 'get',
    url: `https://api.odcloud.kr/api/15099285/v1/uddi:57e7fc08-b32c-482d-8dc7-ab02864a70b7?page=${page}&perPage=${perPage}&serviceKey=${process.env.REACT_APP_API_KEY}`,
    // url: `https://api.odcloud.kr/api/15099285/v1/uddi:57e7fc08-b32c-482d-8dc7-ab02864a70b7?page=${page}&perPage=${perPage}&serviceKey=`,
  };
  const response = await axios(config);

  return response;
};

export const checkErrorStatus = (error) => {
  const errorString = JSON.stringify(error);
  const errorObject = JSON.parse(errorString);
  if (errorObject.status === 401) {
    console.log('인증 정보가 정확 하지 않음');
  } else if (errorObject.status === 500) {
    console.log('API 서버에 문제가 발생하였음');
  }
};
