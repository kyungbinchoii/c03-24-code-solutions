SELECT
    c."firstName",
    c."lastName",
    SUM(p."amount") AS "totalAmountSpent"
FROM
    "customers" c
JOIN
    "payments" p USING ("customerId")
GROUP BY
     c."firstName", c."lastName"
ORDER BY
    "totalAmountSpent" DESC;
