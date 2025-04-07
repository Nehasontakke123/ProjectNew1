import { io } from "socket.io-client";

const socket = io("http://localhost:7001"); // 🔗 तुमचा Socket.io सर्व्हर URL टाका

export default socket;
