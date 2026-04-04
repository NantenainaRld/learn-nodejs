import pool from "./config/db.js";

const testConnection = async () => {
  try {
    const res = await pool.query(
      "SELECT NOW() AS current_time, current_user AS user",
    );

    console.log(`Current time : ${res.rows[0].current_time}`);
    console.log(`Current user : ${res.rows[0].user}`);
  } catch (err) {
    console.log(err.message);
  }
};

testConnection();
