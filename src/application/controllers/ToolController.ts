import HttpServer from "../../infra/server/HttpServer";
import GetTools from "../usecases/GetTools";


export default class ToolController {

  constructor (
    readonly httpServer: HttpServer,
    readonly getTools: GetTools
  ) {
    httpServer.register('get', '/tools', async function (params: any) {
      const tools = await getTools.execute(params.tag);
      return tools;
    })
  }
}