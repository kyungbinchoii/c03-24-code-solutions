
SELECT  "a"."line1",
        "a"."district",
        "c"."name" as "city name",
        "co"."name" as "country Name"
FROM "addresses" as a
JOIN "cities" as c on a."cityId" = c."cityId"
JOIN "countries" as co on c."countryId" = co."countryId"
