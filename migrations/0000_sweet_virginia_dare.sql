CREATE TABLE IF NOT EXISTS "galaxies" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"type" text NOT NULL,
	"age" integer NOT NULL,
	"diameter" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "planetary_systems" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"star" text NOT NULL,
	"star_type" text NOT NULL,
	"age" integer NOT NULL,
	"galaxy_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "planets" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"type" text NOT NULL,
	"distance_to_sun" integer NOT NULL,
	"radius" integer NOT NULL,
	"mass" integer NOT NULL,
	"planetary_system_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "satellites" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"distance_to_planet" integer NOT NULL,
	"radius" integer NOT NULL,
	"planet_id" uuid NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "planetary_systems" ADD CONSTRAINT "planetary_systems_galaxy_id_galaxies_id_fk" FOREIGN KEY ("galaxy_id") REFERENCES "public"."galaxies"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "planets" ADD CONSTRAINT "planets_planetary_system_id_planetary_systems_id_fk" FOREIGN KEY ("planetary_system_id") REFERENCES "public"."planetary_systems"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "satellites" ADD CONSTRAINT "satellites_planet_id_planets_id_fk" FOREIGN KEY ("planet_id") REFERENCES "public"."planets"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
