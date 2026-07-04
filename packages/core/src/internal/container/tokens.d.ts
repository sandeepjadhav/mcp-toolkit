export interface ServiceToken<T> {
    readonly key: symbol;
}
export declare function createServiceToken<T>(description: string): ServiceToken<T>;
