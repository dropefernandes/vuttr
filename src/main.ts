
import PgPromiseAdapter from './infra/database/postgres/PgPromiseAdapter';
import ToolsDAODatabase from './infra/database/ToolsDAODatabase';
import GetTools from './application/usecases/GetTools';
import ExpressAdapter from './infra/server/ExpressAdapter';
import ToolController from './application/controllers/ToolController';

const connection = new PgPromiseAdapter();
const toolsDao = new ToolsDAODatabase(connection);
const getListTools = new GetTools(toolsDao);
const httpServer = new ExpressAdapter();

new ToolController(httpServer, getListTools);
httpServer.listen(3000)