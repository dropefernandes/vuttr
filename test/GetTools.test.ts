import GetTools from "../src/usecases/GetTools"
import ToolsDAO from "../src/domain/entity/ToolsDAO"


const listOfTools = [
  {
    id: 1,
    title: "Notion",
    link: "https://notion.so",
    description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
    tags: [
      "organization",
      "planning",
      "collaboration",
      "writing",
      "calendar"
    ]
  },
  {
    id: 2,
    title: "json-server",
    link: "https://github.com/typicode/json-server",
    description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
    tags: [
      "api",
      "json",
      "schema",
      "node",
      "github",
      "rest"
    ]
  },
  {
    id: 3,
    title: "fastify",
    link: "https://www.fastify.io/",
    description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
    tags: [
      "web",
      "framework",
      "node",
      "http2",
      "https",
      "localhost"
    ]
  }
];

const toolsDAO: ToolsDAO = {
  async findListOfTools(): Promise<any> {
    return listOfTools;
  },
  
  async findToolsByTagName (tagName: string): Promise<any> {
    const listOfToolsByTagName = await listOfTools.filter(tool => tool.tags.includes(tagName));
    return listOfToolsByTagName;
  }
};

const getTools = new GetTools(toolsDAO);

test("it should be returning a list of registered tools ", async function () {
  const listOfToolsOutput = await getTools.execute();

  expect(listOfToolsOutput.length).toBe(3)
})

test("when passed the parameter by the query, return only the filtered tools", async function () {
  const tagName = 'node'
  const listOfToolsByTagNameOutput = await getTools.execute(tagName)

  expect(listOfToolsByTagNameOutput.filter((tool: any) => tool.tags.includes(tagName))).toBeTruthy()
  expect(listOfToolsByTagNameOutput.length).toBe(2)
})