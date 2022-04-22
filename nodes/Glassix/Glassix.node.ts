import { IExecuteFunctions } from "n8n-core";
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  IDataObject,
} from "n8n-workflow";
import { glassixApiRequest } from "./GenericFunctions";

export class Glassix implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Glassix",
    name: "glassix",
    icon: "file:glassix.png",
    group: ["transform"],
    version: 1,
    description: "Glassix Webhook",
    defaults: {
      name: "Glassix",
      color: "#772244",
    },
    inputs: ["main"],
    outputs: ["main"],
    credentials: [
      {
        name: "glassixApi",
        required: true,
      },
    ],

    properties: [],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    let responseData;
    const returnData: IDataObject[] = [];
    try {
      responseData = await glassixApiRequest.call(this);
      responseData = JSON.parse(responseData);
    } catch (error) {
      returnData.push(error as IDataObject);
    }

    return [this.helpers.returnJsonArray(returnData)];
  }
}
