import { app } from "@components";
import { CompaniesController } from "@controllers";

app.get("/companies",CompaniesController.getAll)
app.post("/companies",CompaniesController.create)
app.get("/companies/details/:cnpj?",CompaniesController.getDetails)