export class ToolRegistry {
    tools = [];
    register(tool) {
        this.tools.push(tool);
        tool.register();
    }
    registerMany(tools) {
        for (const tool of tools) {
            this.register(tool);
        }
    }
    getAll() {
        return [...this.tools];
    }
    count() {
        return this.tools.length;
    }
}
