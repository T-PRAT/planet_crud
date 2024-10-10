import { db } from "../config/db";
import { insertMessages, SelectRooms, rooms, messages, users } from "../schema/index";
import { eq } from "drizzle-orm";
import { isNull } from "drizzle-orm/sql";

export const findMessagesByRoomId = async (roomId: string) => {
  return db.select({ content: messages.content }).from(messages).where(eq(messages.roomId, roomId)).execute();
};

export const pushMessage = async (newMessage: insertMessages) => {
  return db.insert(messages).values(newMessage).execute();
};
