import { Server, Socket } from "socket.io";
import { pushRoom } from "../models/roomModel";
import { findMessagesByRoomId } from "../models/messageModel";
import { logger } from "../utils/logger";

export const getRoom = async (socket: Socket, roomId: string) => {
  try {
    const messages = await findMessagesByRoomId(roomId);
    socket.join(roomId);
    socket.emit("messages", messages);
  } catch (error) {
    logger.error(error);
    socket.emit("failed to join room");
  }
};

export const addRoom = async (req: Request, socket: Socket) => {
  const body = await req.json();
  const name = body?.name;
  if (!name) {
    return;
  }
  try {
    const roomName = body.name;
    const room = await pushRoom(roomName);
    socket.emit("room", room);
  } catch (error) {
    logger.error(error);
    socket.emit("failed to create room");
  }
};
