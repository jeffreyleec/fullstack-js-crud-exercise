DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(255) NOT NULL,
    profession VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    branch VARCHAR(255) NOT NULL,
    assigned VARCHAR(255) NOT NULL
);


 