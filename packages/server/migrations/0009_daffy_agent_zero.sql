ALTER TABLE "messages" DROP CONSTRAINT "messages_author_users_id_fk";
--> statement-breakpoint
ALTER TABLE "messages" DROP COLUMN IF EXISTS "author";