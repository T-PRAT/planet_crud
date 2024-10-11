import { Server, Socket } from "socket.io";
import { pushMessage } from "../models/messageModel";
import { logger } from "../utils/logger";

export const addMessage = async (io: Server, roomId: string, message: string, socket: Socket) => {
  // const body = await req.json();
  if (!message || !roomId) {
    return;
  }
  try {
    const newMessage = {
      content: message,
      roomId: roomId,
    };
    const messagePosted = await pushMessage(newMessage);
    io.in(roomId).emit("message", messagePosted);
  } catch (error) {
    logger.error(error);
    socket.emit("failed to post message");
  }
};
