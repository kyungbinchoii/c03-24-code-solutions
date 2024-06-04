SELECT a."firstName", a."lastName"
FROM "actors" AS a
JOIN "castMembers" AS cm ON a."actorId" = cm."actorId"
JOIN "films" AS f ON cm."filmId" = f."filmId"
WHERE f."filmId" = 485;
