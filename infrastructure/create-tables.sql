DROP DATABASE IF EXISTS recursive;
CREATE DATABASE recursive;

\c recursive

-- Create table
CREATE TABLE IF NOT EXISTS "categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "parent_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "categories" 
ADD FOREIGN KEY ("parent_id") 
REFERENCES "categories"("id") 
ON DELETE CASCADE ON UPDATE CASCADE;