import {io} from "socket.io-client";

export function connectWS() {
    return io('https://chat-app1-tf9g.onrender.com')

}