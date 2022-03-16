export const getRecreationForestData = async (page, numberOfData) => {
  const axios = require('axios');

  const config = {
    method: 'get',
    url: `/api?page=1&perPage=10&serviceKey=KFpltfvLCQrqqBhzue4pwPwMO3F75DdoemMKE0Oaqibiq1Ejx0FFTxaTiPtdfQ0zsze30RtPqon1pKifxQzEUw%3D%3D`,
    headers: {},
  };

  await axios(config)
    .then((response) => {
      console.log(response.data, 'api');
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
