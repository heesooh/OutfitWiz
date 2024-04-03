export function setCookie(
  cookiename: string,
  username: string,
  password: string,
  token: string,
  days: number
) {
  const cookieValue = JSON.stringify({ username, password, token, days });

  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = cookiename + "=" + cookieValue + ";" + expires + ";path=/";
}
