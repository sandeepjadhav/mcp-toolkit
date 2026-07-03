import type { ServiceToken } from "./tokens.js";

export class Container {

  private readonly services = new Map<symbol, unknown>();

  register<T>(token: ServiceToken<T>, service: T): void {

    if (this.services.has(token.key)) {
      throw new Error("Service already registered.");
    }

    this.services.set(token.key, service);

  }

  resolve<T>(token: ServiceToken<T>): T {
    const service = this.services.get(token.key);
    if (!service) {
      throw new Error("Service not found.");
    }
    return service as T;
  }

  has<T>(token: ServiceToken<T>): boolean {
    return this.services.has(token.key);
  }

}