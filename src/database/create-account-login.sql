-- Active: 1699906358866@@127.0.0.1@3306
CREATE TABLE
    users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        nickname TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT NOT NULL,
        created_at TEXT DEFAULT (DATETIME()) NOT NULL
    );

