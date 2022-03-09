const { Pool } = require('pg');
const args = process.argv[2]
const values = [`${args || 'JUL02'}`]

const queryString = `SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests 
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = $1
ORDER BY cohort`;




const pool = new Pool({
  user: 'vagrant',
  password: '1234',
  host: 'localhost',
  database: 'bootcampx'
});


pool.query(queryString, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  })
});


