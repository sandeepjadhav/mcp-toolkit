import type { ServiceToken } from "../../core/container/tokens.js";
export interface ServiceDefinition<T> {
    token: ServiceToken<T>;
    create(): Promise<T> | T;
}
