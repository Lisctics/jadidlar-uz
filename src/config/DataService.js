import axios from "axios";
import { BASE_URL } from "./Url.json";

const authHeader = () => ({});

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": localStorage.getItem("JADID_LAN") || "uz",
  },
});

class DataService {
  static get(path, params = {}, optionalHeader = {}) {
    return client({
      method: "GET",
      url: path,
      params: { ...params },
      headers: { ...authHeader(), ...optionalHeader },
    });
  }

  static post(path = "", data = {}, optionalHeader = {}) {
    return client({
      method: "POST",
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader },
    });
  }

  static patch(path = "", data = {}) {
    return client({
      method: "PATCH",
      url: path,
      data: data,
      headers: { ...authHeader() },
    });
  }

  static delete(path = "", data = {}) {
    return client({
      method: "DELETE",
      url: path,
      data: data,
      headers: { ...authHeader() },
    });
  }

  static put(path = "", data = {}, optionalHeader = {}) {
    return client({
      method: "PUT",
      url: path,
      data: data,
      headers: { ...authHeader(), ...optionalHeader },
    });
  }
}

/*
    * axios interceptors runs before and after a request, letting the developer modify req,req more
    * For more details on axios interceptor see https://github.com/axios/axios#interceptors
*/

client.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    let message;
    switch (error.response?.status) {
      case 500:
        message = { errorCode: 500, message: "Внутренняя ошибка сервера!" };
        break;
      case 401:
        message = error.response?.data;2
        break;
      case 400:
        message = error.response?.data;
        break;
      default:
        message = error.response?.data;
    }
    return Promise.reject(message);
  }
);
export { DataService };