export function getToken(tokenType: "access_token" | "refresh_token"): string | null {
   const storedTokenString = localStorage.getItem("token");
   if (storedTokenString) {
      const storedTokenObject = JSON.parse(storedTokenString);
      const token = storedTokenObject[tokenType];
      return token;
   } else {
      return null;
   }


}