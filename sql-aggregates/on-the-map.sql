SELECT
    "co"."name" AS "countryName",
    COUNT(c.name) AS "totalCity"
FROM
    "cities" AS "c"
JOIN
    "countries" AS "co" using ("countryId")
GROUP BY
    "co"."name";
