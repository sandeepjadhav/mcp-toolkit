import { McpApplication } from "../application/McpApplication.js";

export interface Plugin {
  readonly name: string;

  register(app: McpApplication): Promise<void> | void;
}

export type PluginFactory<TOptions = void> =
  TOptions extends void
    ? () => Plugin
    : (options: TOptions) => Plugin;