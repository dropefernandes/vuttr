import ToolsDAO from "../../domain/entity/ToolsDAO";
import Connection from "./Connection";

export default class ToolsDAODatabase implements ToolsDAO {
    
    constructor (readonly connection: Connection) {}
    
    async findListOfTools(): Promise<any> {
        const listOfTools = await this.connection.query("select * from tool");
        return listOfTools;
    }

    async findToolsByTagName(tagName: string): Promise<any> {
        const listToolsByTagName = await this.connection.query("select * from tool where tags @> array[$1]", [tagName]);
        return listToolsByTagName;
    }
}