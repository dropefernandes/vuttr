export default interface ToolsDAO {
  findListOfTools(): Promise<any>;
  findToolsByTagName(tagName: string): Promise<any>;
}