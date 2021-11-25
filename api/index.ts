import { app } from "@components";
import "dotenv/config";
import("@routes")
app.get("/", (req, res) => {
  res.send("Bem vindo à API");
});

const port = process.env.API_PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
