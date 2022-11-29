const { exec } = require("child_process");
require("dotenv").config();

const API_KEY = "xyz";
const PORT = "8108";

const command = `sudo docker run -d -p ${PORT}:8108 -v\`pwd\`/typesense-server-data/:/data \
typesense/typesense:0.22.0.rcu6 --data-dir /data --api-key=${API_KEY} --listen-port ${PORT}  --enable-cors`;

exec(command, (err, stdout, stderr) => {
  if (!err && !stderr) console.log("Typesense Server is running...");

  if (err) {
    console.log("Error running server: ", err);
  }

  if (stderr) {
    console.log("Error running server: ", stderr);
  }

  if (stdout) {
    console.log("Server output: ", stdout);
  }
});
