/**
 * @author Alex Sandro Mateus Oliveira
 * @email alex.oliveira@viannasempre.com.br
 * @create date 2021-11-05 16:12:12
 * @modify date 2021-11-05 16:12:12
 * @desc Portifolio
 */

import GenericException from "./GenericException";

export default class RouteException extends GenericException {
  constructor(message: string, status = 500, name = "RouteException") {
    super(message, status, name);
  }
}
