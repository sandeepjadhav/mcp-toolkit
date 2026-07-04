import type { ServiceToken } from "./tokens.js";
export declare class Container {
    private readonly services;
    register<T>(token: ServiceToken<T>, service: T): void;
    resolve<T>(token: ServiceToken<T>): T;
    has<T>(token: ServiceToken<T>): boolean;
}
