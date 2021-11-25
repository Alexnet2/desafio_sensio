import { createConnection, EntityTarget, Repository } from "typeorm";
export default class GenericRepository<T> {
  public repository: Repository<T>;
  private _model: EntityTarget<T>;
  constructor(model: EntityTarget<T>) {
    this._model = model;
  }

  public async getRepository(): Promise<Repository<T>> {
    const connection = await createConnection();
      const repository = connection.getMongoRepository(this._model);
      return repository
  }
}