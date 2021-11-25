import { Company } from "database/entity/Company";
import GenericRepository from "./GenericRepository";

export const CompanyRepository = new GenericRepository(Company).getRepository();
