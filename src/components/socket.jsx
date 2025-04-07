import { io } from "socket.io-client";

const socket = io("https://projectnewbackend1-1.onrender.com"); // 🔗 तुमचा Socket.io सर्व्हर URL टाका

export default socket;
