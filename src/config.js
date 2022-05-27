const API_DOMAIN = process.env.API_DOMAIN;
const API_PORT = process.env.API_PORT;
const API_PROTOCOL = process.env.API_PROTOCOL;

const WEBSOCKET_DOMAIN = process.env.WEBSOCKET_DOMAIN;
const WEBSOCKET_PORT = process.env.WEBSOCKET_PORT;
const WEBSOCKET_PROTOCOL = process.env.WEBSOCKET_PROTOCOL;

const Config = {
  apiUrl: API_PROTOCOL + '://' + API_DOMAIN + ':' + API_PORT,
  serverUrl: WEBSOCKET_PROTOCOL + '://' + WEBSOCKET_DOMAIN + ':' + WEBSOCKET_PORT,
};

export default Config;
