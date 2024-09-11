ALTER TABLE "planetary_systems" ALTER COLUMN "galaxy_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "planets" ALTER COLUMN "planetary_system_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "satellites" ALTER COLUMN "planet_id" DROP NOT NULL;