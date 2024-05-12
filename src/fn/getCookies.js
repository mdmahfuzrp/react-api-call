function getCookies(name) {
  if (typeof document !== "undefined") {
    // code that relies on the document object
    const cookies = document?.cookie?.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
  }
  return null;
}
export default getCookies;
