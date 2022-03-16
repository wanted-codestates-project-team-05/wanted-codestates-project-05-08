export const getRecreationForestData = (page, numberOfData) => {
  const axios = require('axios');

  const config = {
    method: 'get',
    url: `/api?serviceKey=${process.env.REACT_APP_API_KEY}&currentPage=${page}&perPage=${numberOfData}&NM=&LC=`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
