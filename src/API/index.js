import request from "./request";
const baseUrl = "http://localhost:8080/api/v1/witch/";

const urls = {
  get_solve: "solve",
};

const callAPI = async (
  endpoint,
  method,
  headers = {},
  params = {},
  data = {},
  baseURL
) => {
  const options = {
    baseURL: baseURL,
    url: endpoint,
    method,
    headers,
    data,
    params,
  };

  const response = await request(options);
  const responseAPI = response && response.data;
  return responseAPI;
};

export const solve = (data) => {
  return callAPI(urls.get_solve, "post", {}, {}, data, baseUrl);
};
