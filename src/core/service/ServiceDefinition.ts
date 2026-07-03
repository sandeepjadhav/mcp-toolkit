import type { ServiceToken } from "../container/tokens.js";

export interface ServiceDefinition<T> {

    token: ServiceToken<T>;

    create(): Promise<T> | T;

}