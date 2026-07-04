export function createServiceToken(description) {
    return {
        key: Symbol(description)
    };
}
