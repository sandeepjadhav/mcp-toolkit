export class Container {
    services = new Map();
    register(token, service) {
        if (this.services.has(token.key)) {
            throw new Error("Service already registered.");
        }
        this.services.set(token.key, service);
    }
    resolve(token) {
        const service = this.services.get(token.key);
        if (!service) {
            throw new Error("Service not found.");
        }
        return service;
    }
    has(token) {
        return this.services.has(token.key);
    }
}
