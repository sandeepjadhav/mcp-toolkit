export class ToolResponse {
    static text(text) {
        return {
            content: [
                {
                    type: "text",
                    text,
                },
            ],
        };
    }
    static json(data) {
        return this.text(JSON.stringify(data, null, 2));
    }
    static success(message) {
        return this.text(`✅ ${message}`);
    }
    static created(id) {
        return this.text(`Created successfully (${id})`);
    }
    static deleted(count) {
        return this.text(`Deleted ${count} document(s)`);
    }
    static updated(count) {
        return this.text(`Updated ${count} document(s)`);
    }
}
