<template>
  <div id="app">
    <div class="container mt-2">
      <div class="row justify-content-center my-5">
        <div class="col-auto text-center">
          <img class="logo mt-8" draggable="false" alt="VI-ROSE" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzkiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA3OSAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM0LjYyMzUgMjQuNzcxTDMyLjY3MjkgMzAuNTc4MUwzNC4yMzMzIDMyLjIxMTRMMzYuNzY5MiAyOC4yMTlMMzQuNjIzNSAyNC43NzFaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTQ1XzE2MjApIi8+CjxwYXRoIGQ9Ik0zNy40NTE5IDI5LjIxN0wzNi4yODE1IDMyLjMwMjFMMzkuNTk3NSAzNS45MzE1TDQyLjkxMzYgMzIuNjY1TDQxLjU0ODIgMjkuMjE3TDM5LjU5NzUgMzEuNTc2MkwzNy40NTE5IDI5LjIxN1oiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl81NDVfMTYyMCkiLz4KPHBhdGggZD0iTTQyLjEzMzQgMjguMTI4Mkw0NC4yNzkgMjUuMDQzMkw0Ni4yMjk3IDMwLjY2ODlMNDQuNjY5MiAzMi4zMDIxTDQyLjEzMzQgMjguMTI4MloiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl81NDVfMTYyMCkiLz4KPHBhdGggZD0iTTMxLjQwNDkgMTkuMDU0NkwzOS41OTc1IDI5LjU3OTlMNDcuNTk1MSAxOS4wNTQ2SDU5LjI5ODhMNjQuNTY1NCAxMy45NzMzSDUxLjg4NjRMNTMuNDQ2OSAxMS43OTU3SDY3LjEwMTJMNzEuOTc3OCA3LjA3NzQxSDU3LjM0ODFMNTguOTA4NiA1LjA4MTIySDc0LjEyMzVMNzkgMC4xODE0NzJINTQuODEyM0w0Ni44MTQ4IDUuODA3MTFMNDcuNzkwMSA5LjQzNjU1TDQ0LjI3OSAxNC41MTc4TDM5LjU5NzUgMTAuMzQzOUwzNC43MjEgMTQuNjk5MkwzMS40MDQ5IDkuNzk5NDlMMzIuMzgwMiA1LjgwNzExTDI0LjM4MjcgMEgwTDUuMDcxNjEgNS4wODEyMkgyMC4yODY0TDIxLjY1MTkgNi44OTU5NEg3LjIxNzI4TDEyLjA5MzggMTEuNzk1N0gyNS43NDgyTDI3LjExMzYgMTMuNjEwNEwxNC40MzQ2IDEzLjc5MTlMMTkuODk2MyAxOS4wNTQ2SDMxLjQwNDlaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfNTQ1XzE2MjApIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNTQ1XzE2MjAiIHgxPSIzNi45MzI1IiB5MT0iMjAuMzU2OSIgeDI9IjMxLjYzNzkiIHkyPSIyMS4zOTc4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4xNzAwNDgiIHN0b3AtY29sb3I9IiMyMkU2Q0UiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzQ3OUZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl81NDVfMTYyMCIgeDE9IjQzLjE3OCIgeTE9IjI1LjIzMzYiIHgyPSIzNS4yNTk2IiB5Mj0iMjguMDI2NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMTcwMDQ4IiBzdG9wLWNvbG9yPSIjMjJFNkNFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzM0NzlGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfNTQ1XzE2MjAiIHgxPSI0Ni4zOTMiIHkxPSIyMC43MzY4IiB4Mj0iNDEuMTA4NCIgeTI9IjIxLjgwMTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjE3MDA0OCIgc3RvcC1jb2xvcj0iIzIyRTZDRSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzNDc5RkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzU0NV8xNjIwIiB4MT0iODIuMTQ5NSIgeTE9Ii0xNy41NDg2IiB4Mj0iMjYuNjA3IiB5Mj0iMzUuNDE4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMTcwMDQ4IiBzdG9wLWNvbG9yPSIjMjJFNkNFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzM0NzlGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=" width="300px">
        </div>
      </div>  
      <div class="row justify-content-center">
        <div class="col-11 col-md-9">
          <div class="card shadow-lg">
            <div class="card-body">
              <div class="container">
                <div class="mb-2 mx-2 row justify-content-between">
                  <button class="btn btn-primary mr-2 mb-2" value="72" @click="sendData">Check Servo MX</button>
                  <button class="btn btn-primary mr-2 mb-2" value="73" @click="sendData">Check Servo XL</button>
                  <button class="btn btn-primary mr-2 mb-2" value="75 1" @click="sendData">Say Hi 👋</button>
                  <button class="btn btn-primary mr-2 mb-2" value="75 2" @click="sendData">Gambang Semarang</button>
                </div>
                <div class="row justify-content-center">
                  <div class="col-8 col-md-9 col-lg-10">
                      <div class="form-group">
                        <input type="text" class="form-control" placeholder="Type Here" v-model="sendInput" v-on:keyup.enter="sendData" :disabled="!ws.connected">
                      </div>
                  </div>
                  <div class="col-4 col-md-3 col-lg-2">
                    <button class="btn btn-primary" @click="sendData" :disabled="!ws.connected">Send</button>
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12">
                    <div class="form-group mt-3">
                      <textarea id="console" class="form-control" rows="8" v-model="serialBuffer" readonly="readonly"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Socket from './socket';
import 'core-js/modules/es.string.trim';

export default {
  name: 'webserial',

  data(){
    return{
      ws:{
        connected: false,
        //lastPing: new Date()
      },
      serialBuffer: "",
      sendInput: ""
    }
  },

  methods:{
    sendData(event){
      if(event.target.value){
        Socket.send(event.target.value);
      } else if(this.sendInput.trim() != ""){
        Socket.send(this.sendInput.trim());
        this.sendInput = "";
      }
    }
  },

  mounted(){
    Socket.$on("connected", () => {
      this.ws.connected = true;
    });

    Socket.$on("disconnected", () => {
      this.ws.connected = false;
    });

    Socket.$on("message", (msg) => {
      this.ws.connected = true;
      this.serialBuffer = this.serialBuffer + msg;
      let textarea = this.$el.querySelector("#console");
      textarea.scrollTop = textarea.scrollHeight;
    });
  }
}
</script>

<style lang="scss">
.logo{
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.logo.inactive{
  filter: grayscale(100%);
}

textarea[readonly] {
     cursor: text !important;
}

</style>
