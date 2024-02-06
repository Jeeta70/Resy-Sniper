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

export function getresyloginDetail() {
  const resyloginDetailString = localStorage.getItem("resyloginDetail");
  if (resyloginDetailString) {
    const resyloginDetailStringObject = JSON.parse(resyloginDetailString);
    return resyloginDetailStringObject;
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


// format Thu Feb 08 2024 00:00:00 GMT+0530 (India Standard Time) into 02-10-2024
export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date).replace(/\//g, '-');
}

export function getDayBefore(dateString: string | null, dayBefore: number): string | undefined {
  if (!dateString) return;
  const [month, day, year] = dateString.split('-').map(Number);
  const currentDate = new Date(year, month - 1, day);
  currentDate.setDate(currentDate.getDate() - dayBefore);
  const formattedDate = formatDate(currentDate);
  return formattedDate;
}

export function isToday(dateString: string): boolean {
  const [month, day, year] = dateString.split('-').map(Number);
  const givenDate = new Date(year, month - 1, day);

  const today = new Date();
  return givenDate.getDate() === today.getDate() &&
    givenDate.getMonth() === today.getMonth() &&
    givenDate.getFullYear() === today.getFullYear();
}

export function capitalizeFirstAlphabet(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function formatDateForSnipingDate(dateString: string | null) {
  if (!dateString) return
  const [month, day, year] = dateString.split('-').map(Number);
  return `${year}-${month}-${day}`
}

export function getStatusString(inputString: string): "active" | "canceled" | "paused" | "completed" {
  switch (inputString.toLowerCase()) {
    case 'active':
      return 'active';
    case 'canceled':
      return 'canceled';
    case 'paused':
      return 'paused';
    case 'completed_unsuccessfully':
    case 'completed_successfully':
      return 'completed';
    default:
      return 'active';
  }
}

export function getStatusStringBadge(inputString: string): "active" | "canceled" | "paused" | "completed" | "unsuccessful" {
  switch (inputString.toLowerCase()) {
    case 'active':
      return 'active';
    case 'canceled':
      return 'canceled';
    case 'paused':
      return 'paused';
    case 'completed_unsuccessfully':
      return "unsuccessful"
    case 'completed_successfully':
      return 'completed';
    default:
      return 'active';
  }
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
