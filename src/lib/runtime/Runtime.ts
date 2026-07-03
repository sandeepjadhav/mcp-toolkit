import { Container } from "../container/Container.js";
import type { ServiceToken } from "../container/tokens.js";

export class Runtime {
  constructor(
    private readonly container: Container
  ) {}

  public resolve<T>(
    token: ServiceToken<T>
  ): T {
    return this.container.resolve(token);
  }
}