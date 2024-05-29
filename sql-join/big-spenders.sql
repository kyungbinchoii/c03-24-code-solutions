
SELECT "p"."amount",
 "c"."firstName",
  "c"."lastName"
FROM "payments" AS p
JOIN "customers" AS c ON p."customerId" = c."customerId"
ORDER BY p.amount DESC
LIMIT 10;
