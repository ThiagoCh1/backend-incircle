var Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "innergy",
  "th",
  "5gkUAo52AtMJ5s5E6iYAawtk5WZMydRV",
  {
    host: "dpg-cio1pvp5rnup8j643kkg-a.frankfurt-postgres.render.com",
    port: "5432",
    dialect: "postgres",
    timestamps: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // You can set this to true if your certificate is signed by a trusted CA
      },
    },
  }
);
module.exports = sequelize;

/*
var Sequelize = require("sequelize");
const sequelize = new Sequelize("innergy", "postgres", "thiago9645", {
  host: "localhost",
  port: "5432",
  dialect: "postgres",
  timestamps: false,
});
module.exports = sequelize;

*/
