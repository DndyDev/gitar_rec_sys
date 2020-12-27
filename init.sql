
CREATE TABLE "user"(
  "id" SERIAL PRIMARY KEY,
--   "firstName" TEXT NOT NULL,
--   "lastName" TEXT NOT NULL,
  "login" TEXT NOT NULL,
  "password" TEXT NOT NULL
);

CREATE TABLE "guitar"(
  "id" SERIAL PRIMARY KEY,
  "name" TEXT  NOT NULL,
  "url" TEXT NOT NULL,
  "description" TEXT NOT NULL
);

