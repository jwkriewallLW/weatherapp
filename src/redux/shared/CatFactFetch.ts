import axios from 'axios';
//import Store from "../../store";
import { GET, PUT, POST, DELETE, OK, CREATED, NO_CONTENT, BAD_REQUEST, UNAUTHORIZED, NOT_FOUND } from './HttpResponses'

export const API_BASE_URL = 'https://catfact.ninja/';
if (!API_BASE_URL) {
  throw new Error("Missing baseApiURL in authConfig");
}

async function apiFetch(method: string, apiURL: string = "", data?: any ) {
  const baseUrl = API_BASE_URL.endsWith("/") ? API_BASE_URL : `${API_BASE_URL}/`;
  apiURL = `${baseUrl}${apiURL}`;

  // const headers = {
  //   Authorization: `Bearer ${accessToken}`,
  //   "Access-Control-Allow-Origin": "*",
  //   "Content-Type": "application/json",
  // };
  const body = JSON.stringify(data);

  switch (method) {
    case GET: {
      return axios
        .get(apiURL, {
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
    case PUT:
      return null;
    case POST: {
        return axios
        .post(apiURL, {
          method: method,
          // headers: headers,
          body: body
        })
        .then((response: any) => {
          if (response.status === CREATED) {
            return response.data;
          } else if (response.status === BAD_REQUEST) {
            return null;          
          } else {
            throw new Error(`${response.status} - ${response.statusText}`);
          }
        });    
    }
    case DELETE:
      return null;
    default:
      return null;
  }
}

export default{
    _fetch: apiFetch,
    get:(url:string) => apiFetch(GET, url),
    put:(url:string, data: any) => apiFetch(PUT, url, data),
    post:(url:string, data: any) => apiFetch(POST, url, data),
    delete: (url:string) => apiFetch(DELETE, url)
}