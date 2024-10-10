import { addMessage } from "./messageEvent";
import { getRoom, addRoom } from "./roomEvent";
import { Server, Socket } from "socket.io";
import { Request as ExpressRequest } from "express";
import { logger } from "../utils/logger";
import http from "http";

const socketEvents = (io: Server, req: Request) => {
  io.on("connection", (socket: Socket) => {
    socket.on("addRoom", () => addRoom(req, socket));
    socket.on("getRoom", (roomId: string) => getRoom(socket, roomId));
    socket.on("addMessage", (data) => addMessage(req, io, data));
    socket.on("disconnect", () => {
      logger.info(`${socket.id} disconnected`);
    });
  });
};

export const initializeSocketServer = (server: http.Server, req: Request): Server => {
  const io = new Server(server);

  socketEvents(io, req);
  return io;
};
