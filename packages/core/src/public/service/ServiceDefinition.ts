import { ServiceToken } from "../../internal/container/tokens.js";

export interface ServiceDefinition<T> {

    token: ServiceToken<T>;

    create(): Promise<T> | T;

}