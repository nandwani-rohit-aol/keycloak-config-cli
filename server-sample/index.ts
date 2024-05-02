import cors from "cors";
import express from "express";
import Keycloak from "keycloak-connect";
const app = express();
const port = 3110;

const keycloak = new Keycloak({});

app.use(cors());
app.use(keycloak.middleware());
app.post("/", keycloak.protect("course:create"), (req, res, next) => {
  const perm = req.permissions;
  return res.status(200).send({
    perm,
  });
});

app.listen(port, () => console.log("listening darling..."));
