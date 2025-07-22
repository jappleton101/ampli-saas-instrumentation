-- Run once to create the db and test users
CREATE DATABASE yourdb;

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Connect to the newly created database (run this manually if using psql)
\c yourdb

-- Create the users table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    uuid UUID NOT NULL DEFAULT gen_random_uuid(),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
);

INSERT INTO users (first_name, last_name, email)
VALUES ('James', 'Appleton', 'james.appleton@amplitude.com');

CREATE TABLE teams (
    team_id SERIAL PRIMARY KEY,
    team_name VARCHAR(100) UNIQUE NOT NULL,
    team_leader INTEGER,
    CONSTRAINT fk_team_leader
        FOREIGN KEY (team_leader)
        REFERENCES users(user_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

INSERT INTO teams (team_name, team_leader)
VALUES ('Amplitude', 1);

ALTER TABLE users
ADD COLUMN team_id INTEGER,
ADD CONSTRAINT fk_user_team
    FOREIGN KEY (team_id)
    REFERENCES teams(team_id)
    ON DELETE SET NULL
    ON UPDATE CASCADE;

UPDATE users
SET team_id = 1
WHERE user_id = 1;


CREATE TABLE user_teams (
    user_id INTEGER NOT NULL,
    team_id INTEGER NOT NULL,
    PRIMARY KEY (user_id, team_id),
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_team
        FOREIGN KEY (team_id)
        REFERENCES teams(team_id)
        ON DELETE CASCADE
);

INSERT INTO user_teams (user_id, team_id)
VALUES (1, 1);


CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    task_owner INTEGER,
    CONSTRAINT fk_task_owner
        FOREIGN KEY (task_owner)
        REFERENCES users(user_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

INSERT INTO tasks (task_name, task_owner)
VALUES ('Instrument Amplitude', 1);

CREATE TABLE user_tasks (
    user_id INTEGER NOT NULL,
    task_id INTEGER NOT NULL,
    PRIMARY KEY (user_id, task_id),
    CONSTRAINT fk_user_task_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_user_task_task
        FOREIGN KEY (task_id)
        REFERENCES tasks(task_id)
        ON DELETE CASCADE
);

INSERT INTO user_tasks (user_id, task_id)
VALUES (1, 1);