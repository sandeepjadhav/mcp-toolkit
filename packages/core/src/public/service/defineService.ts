import type { ServiceDefinition } from "./ServiceDefinition.js";

export function defineService<T>(
    definition: ServiceDefinition<T>
): ServiceDefinition<T> {

    return definition;

}