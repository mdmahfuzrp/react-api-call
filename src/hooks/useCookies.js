import deleteCookie from "../fn/deleteCookies";
import getCookies from "../fn/getCookies";
import setCookies from "../fn/setCookies";

const useCookies = () => {
  return {
    setCookies,
    getCookies,
    deleteCookie,
  };
};

export default useCookies;
