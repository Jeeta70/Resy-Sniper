// import { baseUrl } from "@/config/baseUrl";

import { format } from "date-fns";

// import axios from "axios";
export function getToken(
  tokenType: "access_token" | "refresh_token"
): string | null {
  const storedTokenString = localStorage.getItem("token");
  if (storedTokenString) {
    const storedTokenObject = JSON.parse(storedTokenString);
    const token = storedTokenObject[tokenType];
    return token;
  } else {
    return null;
  }
}

export function convertDateTimeFormt(
  originalDateString: Date | string
): string {
  const originalDate = new Date(originalDateString);
  return format(originalDate, "yyyy-MM-dd");
}

// convet 'Thu, 25 Jan 2024 00:00:00 GMT', into Thu Jan 25 2024 19:05:06 GMT +0530(India Standard Time) format

export function convertDateFormat(originalDateString: Date): string {
  const inputDate = new Date(originalDateString);

  // Getting the formatted date strin

  const outputDate = inputDate.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
    timeZone: "IST",
  });

  return outputDate.toString();
}

export function capitalizeFirstAlphabet(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function checkStatus(
  paused: number[],
  completed: number[],
  success: number[]
): string {

  if (completed) {
    return "completed";
  }
  if (!success && paused) {
    return "paused";
  }
  
  if(!success && !paused){
    return "canceled"
  }
  return "default";
}

// const axiosApiInstance = axios.create();

// const refreshAccessToken = async () => {
//    try {
//       const basic = getToken("refresh_token");

//       // header paremeter
//       const config = {
//          headers: {
//             Authorization: `Bearer ${basic}`,
//          },
//       };

//       const response = await axios.post(`${baseUrl}/api/refresh`, {}, config);

//       console.log(3);
//       return response.data;
//    } catch (error) { 
//       console.log(error);

//       // localStorage.clear();
//       window.location.reload();
//    }
// };

// axiosApiInstance.interceptors.request.use(function (config) {
//    const token = getToken("access_token")
//    config.headers.Authorization = token ? `Bearer ${token}` : "";
//    config.headers["Accept"] = "application/json";
//    config.headers["Content-Type"] = "application/json"
//    return config;
// });

// // Response interceptor for API calls
// axiosApiInstance.interceptors.response.use(
//    (response) => {
//       console.log(6);

//       return response;
//    },
//    async function (error) {
//    console.log(1);

//       const originalRequest = error.config;

//       if (error.response.status === 401 && !originalRequest?._retry) {
//          originalRequest._retry = true;

//          const access_token = await refreshAccessToken();
//          console.log(access_token);

//          //   console.log(JSON.parse(localStorage.getItem("token")))
// console.log(4);

//          const localStorageToken = JSON.parse(localStorage.getItem("token"))

//          localStorageToken.access_token = access_token.data.access_token

//          localStorage.setItem("token", JSON.stringify(localStorageToken))

//          // localStorage.setItem("token", access_token.access_token.toString());
//          error.response.config.headers["Authorization"] =
//             "Bearer " + access_token.data.access_token;
// console.log(5);

//          return await axiosApiInstance(error.response.config);
//       }

//       return Promise.reject(error);
//    }
// );

// export default axiosApiInstance;
