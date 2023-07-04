import ToolsDAO from "../../domain/entity/ToolsDAO";


export default class GetTools {

  constructor(readonly toolsDAO: ToolsDAO) {}

  async execute(params?: string) {
    return params ?
      await this.toolsDAO.findToolsByTagName(params) :
      await this.toolsDAO.findListOfTools();
  }
}