import type { McpApplication } from "../index.js";

export interface Plugin {
  readonly name: string;

  register(app: McpApplication): Promise<void> | void;
}

export type PluginFactory<TOptions = void> =
  TOptions extends void
    ? () => Plugin
    : (options: TOptions) => Plugin;

    