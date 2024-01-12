// import { baseUrl } from "@/config/baseUrl";
// import axios from "axios";
export function getToken(   tokenType: "access_token" | "refresh_token"): string | null {
   const storedTokenString = localStorage.getItem("token");
   if (storedTokenString) {
      const storedTokenObject = JSON.parse(storedTokenString);
      const token = storedTokenObject[tokenType];
      return token;
   } else {
      return null;
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
