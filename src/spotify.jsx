export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3001/";
const clientId = "89c724bc014747859cfd984e79008128";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
  "user-modify-playback-state",
];


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;