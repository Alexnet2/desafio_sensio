import { CompanyRepository } from "@repositories";
import { RouteException } from "@errors";
import { Request, Response } from "express";
import { api_receita } from "@config";

export const getAll = async (req: Request, res: Response) => {
  try {
    const companies = await (await CompanyRepository).find();
    res.status(200).send(companies);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    let company = await (
      await CompanyRepository
    ).find({
      where: {
        cnpj: req.body.cnpj,
      },
    });

    if (company.length) throw new RouteException("CNPJ já existe", 302);

    company = await (await CompanyRepository).save(req.body);
    res.status(201).send(company);
  } catch (err: any) {
    if (err.status) {
      res.status(err.status).send(err.error);
    } else [res.status(500).send(err)];
  }
};

export const getDetails = async (req: Request, res: Response) => {
  try {
    if (!req.params.cnpj) throw new RouteException("CNPJ não informado", 400);

    const resp = await api_receita.get(`/${req.params.cnpj}`);
    
    if (resp.data.status === "ERROR")
      throw new RouteException(resp.data.message, 400);

    res.status(200).send(resp.data);
  } catch (err: any) {
    if (!err.error) {
      res.status(err.status).send(err.response.data);
    } else {
      res.status(err.status).send(err.error);
    }
  }
};
