export interface ServiceToken<T> {
    readonly key: symbol;
}

export function createServiceToken<T>(
    description: string
): ServiceToken<T> {

    return {
        key: Symbol(description)
    };

}