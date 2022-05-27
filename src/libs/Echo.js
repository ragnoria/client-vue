import Config from "../config";

export default class Echo {
  connection = null;

  connect() {
    this.connection = new WebSocket(Config.serverUrl);
    this.connection.onopen = this.onOpen;
    this.connection.onmessage = this.onMessage;
    this.connection.onclose = this.onClose;
  }

  onOpen() {

  }

  onMessage(e) {
    let message = JSON.parse(e.data);
  }

  onClose() {

  }

  emit(event, args = []) {
    this.connection.send(JSON.stringify({event: event, params: args}));
  }

}
