select "f"."releaseYear",
f."title",
"g"."name" as "genreName"
from "films" as f
Join "filmGenre" as fg on f."filmId" = fg."filmId"
Join "genres" as g on fg."genreId" = g."genreId"
where f."title" = 'Boogie Amelie'
