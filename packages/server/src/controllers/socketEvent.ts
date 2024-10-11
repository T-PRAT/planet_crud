import { addMessage } from "./messageEvent";
import { getRoom, addRoom } from "./roomEvent";
import { Server, Socket } from "socket.io";
import { Request as ExpressRequest } from "express";
import { logger } from "../utils/logger";
import http from "http";

const socketEvents = (io: Server) => {
  const newRoom = "firstRoom";
  // const messageContent = "message1";
  io.on("connection", (socket: Socket) => {
    socket.on("addRoom", () => addRoom(newRoom, socket));
    socket.on("getRoom", (roomId: string) => getRoom(socket, roomId));
    socket.on("addMessage", (roomId: string, messageContent: string) => addMessage(io, roomId, messageContent, socket));
    socket.on("disconnect", () => {
      logger.info(`${socket.id} disconnected`);
    });
  });
};

export const initializeSocketServer = (server: http.Server): Server => {
  const io = new Server(server);

  socketEvents(io);
  return io;
};
