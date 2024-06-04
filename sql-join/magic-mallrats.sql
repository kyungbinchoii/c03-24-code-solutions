select c."firstName" , c."lastName"
from "customers" as c
join "rentals" as r on c."customerId" = r."customerId"
join "inventory" as i on r."inventoryId" = i."inventoryId"
join "films" as f on i."filmId" = f."filmId"
where f."filmId" = 547
