const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || "1.0.0";
app.get("/", (req, res) => {
 res.json({ message: "Hola desde el proyecto final de CI/CD!" });
});
app.get("/health", (req, res) => {
 res.json({ status: "ok" });
});
app.get("/info", (req, res) => {
 res.json({
 name: "simple-ci-cd-demo",
 version: APP_VERSION,
 time: new Date().toISOString(),
 });
});
app.listen(PORT, () => {
 console.log(`Servidor escuchando en puerto ${PORT}`);
});
