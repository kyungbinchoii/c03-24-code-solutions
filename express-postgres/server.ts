import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});
const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      SELECT "title", "filmId"
      FROM "films"
      ORDER BY "replacementCost" DESC;
    `;
    const result = await db.query(sql);
    const films = result.rows;
    res.send(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/film', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
      SELECT "title", "filmId"
      FROM "films"
      WHERE "filmId" = $1;
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `Film with filmId ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/film', async (req, res, next) => {
  try {
    const { filmId, title } = req.query;
    if (!filmId || !title) {
      throw new ClientError(400, 'filmId and title are required');
    }

    const checkingSql = `
      SELECT "filmId"
      FROM "films"
      WHERE "filmId" = $1;
    `;
    const checkParams = [filmId];
    const result = await db.query(checkingSql, checkParams);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `Film with filmId ${filmId} not found`);
    }

    const updateSql = `
      UPDATE "films"
      SET "title" = $1
      WHERE "filmId" = $2;
    `;
    const updateParams = [title, filmId];
    await db.query(updateSql, updateParams);

    res.send({ message: 'Film title updated successfully' });
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
