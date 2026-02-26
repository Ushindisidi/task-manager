DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,   -- Unique identifier, auto-incremented
    title       TEXT    NOT NULL,                    -- Task title (required)
    description TEXT,                                -- Optional detailed description
    status      TEXT    NOT NULL DEFAULT 'pending'   -- Task state
                        CHECK(status IN ('pending', 'in_progress', 'completed')),
    create_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,  -- Auto-set on creation
    due_date    DATE                                 -- Optional deadline
);

CREATE INDEX idx_tasks_status ON tasks(status);

INSERT INTO tasks (title, description, status, due_date) VALUES
    ('Set up project repository',  'Initialize GitHub repo and push initial code',      'completed',  '2025-03-01'),
    ('Design database schema',     'Define tables, fields, and relationships',           'completed',  '2025-03-02'),
    ('Build REST API endpoints',   'Implement CRUD endpoints using FastAPI',             'in_progress','2025-03-05'),
    ('Develop frontend UI',        'Create HTML/CSS/JS interface to consume the API',   'pending',    '2025-03-08'),
    ('Write README documentation', 'Document setup instructions and tech stack used',   'pending',    '2025-03-10');