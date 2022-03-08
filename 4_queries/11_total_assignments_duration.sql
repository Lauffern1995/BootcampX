SELECT day, count(*) AS number_of_assignments, SUM(duration)
from assignments
GROUP BY day
ORDER BY day 