import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    SELECT *
    FROM "grades";
    `;
    const result = await db.query(sql);
    const grades = result.rows;
    res.json(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    const sql = `
      SELECT *
      FROM "grades"
      WHERE "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `Grade ${gradeId} not found`);
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name) {
      throw new ClientError(400, 'Name is required');
    }
    if (!course) {
      throw new ClientError(400, 'Course is required');
    }
    if (!Number.isInteger(score)) {
      throw new ClientError(400, 'Score must be a number');
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, 'Score must be between 0 and 100');
    }

    const sql = `
      INSERT INTO "grades" (name, course, score)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const { name, course, score } = req.body;

    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    if (!name) {
      throw new ClientError(400, 'Name is required');
    }
    if (!course) {
      throw new ClientError(400, 'Course is required');
    }
    if (!Number.isInteger(score)) {
      throw new ClientError(400, 'Score must be a number');
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, 'Score must be between 0 and 100');
    }

    const sql = `
      UPDATE grades
      SET name = $1, course = $2, score = $3
      WHERE "gradeId" = $4
      RETURNING *;
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `Grade ${gradeId} not found`);
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    const sql = `
      DELETE FROM "grades"
      WHERE "gradeId" = $1
      RETURNING *;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `Grade ${gradeId} not found`);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
