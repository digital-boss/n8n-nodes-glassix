import {
  IExecuteFunctions,
  IExecuteSingleFunctions,
  IHookFunctions,
  ILoadOptionsFunctions,
} from "n8n-core";

import { OptionsWithUri } from "request";

export async function glassixApiRequest(
  this:
    | IHookFunctions
    | IExecuteFunctions
    | IExecuteSingleFunctions
    | ILoadOptionsFunctions,
): Promise<any> {
  const options: OptionsWithUri = {
    headers: {
      "Content-Type": "application/json",
    },
    method: 'GET',
    uri: 'https://app.glassix.com/api/v1.2/webhooks/getevents?deleteEvents=true',
  };
  const credentials = await this.getCredentials("glassixApi");
  console.log(credentials)
  if (credentials != undefined && credentials.glassixApiKey) {
    options.headers!["Authorization"] = "Bearer " + credentials.glassixApiKey;
    console.log(credentials);
  }

  return await this.helpers.request!(options);
}
