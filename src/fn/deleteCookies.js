function deleteCookies(secretName) {
  document.cookie = `${secretName}=; Max-Age=-99999999; path=/;`;
}
export default deleteCookies;
