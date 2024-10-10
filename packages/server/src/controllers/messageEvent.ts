import { Server, Socket } from "socket.io";
import { pushMessage } from "../models/messageModel";
import { logger } from "../utils/logger";

export const addMessage = async (req: Request, io: Server, socket: Socket) => {
  const body = await req.json();
  const content = body?.content;
  const id = body?.id;
  if (!content || !id) {
    return;
  }
  try {
    const message = await pushMessage(content);
    io.in(id).emit("message", message);
  } catch (error) {
    logger.error(error);
    socket.emit("failed to post message");
  }
};
