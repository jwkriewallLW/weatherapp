
import axios from 'axios';
import { GET, PUT, POST, DELETE, OK, CREATED, NO_CONTENT, BAD_REQUEST, UNAUTHORIZED, NOT_FOUND } from './HttpResponses';

// Axios Calls

//http://localhost:8080/allweather

export const API_BASE_URL = 'http://localhost:8080/';
if (!API_BASE_URL) {
  throw new Error("Missing baseApiURL in authConfig");
}

async function weatherApiFetch(method: string, apiURL: string = "", data?: any ) {
  const baseUrl = API_BASE_URL.endsWith("/") ? API_BASE_URL : `${API_BASE_URL}/`;
  apiURL = `${baseUrl}${apiURL}`;

    const body = JSON.stringify(data);

  switch (method) {
    case GET: {
      return axios
        .get(apiURL + "allweather", {
          method: method,
          // headers: headers,
        })
        .then((response: any) => {
          if (response.status === OK) {
            return response.data;
          } else if (response.status === NO_CONTENT) {
            return null;
          } else if (response.status === NOT_FOUND) {
            return null;
          } else {
            throw new Error(`${response.status} - ${response.statusText}`);
          }
        });
    }
}
}
export default{
    _fetch: weatherApiFetch,
    get:(url:string) => weatherApiFetch(GET, url),
    // put:(url:string, data: any) => apiFetch(PUT, url, data),
    // post:(url:string, data: any) => apiFetch(POST, url, data),
    // delete: (url:string) => apiFetch(DELETE, url)
}