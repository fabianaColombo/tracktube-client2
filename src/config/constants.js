export const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://tracktube.herokuapp.com"
    : "http://localhost:4000";

export const DEFAULT_MESSAGE_TIMEOUT = 3000;
