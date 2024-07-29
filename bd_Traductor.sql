SELECT datname FROM pg_database;

-- Luego, crea la tabla
CREATE TABLE translations (
    id SERIAL PRIMARY KEY,
    request_text TEXT,
    translated_text TEXT,
    from_lang TEXT,
    to_lang TEXT,
    status TEXT
);

-- Insertar una fila en la tabla translations
INSERT INTO translations (request_text, translated_text, from_lang, to_lang, status)
VALUES ('Hello, how are you?', 'Hola, ¿cómo estás?', 'en', 'es', 'completed');


SELECT * FROM translations;