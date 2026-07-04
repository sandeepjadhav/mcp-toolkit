export class ToolError {
    static from(error) {
        return {
            isError: true,
            content: [
                {
                    type: "text",
                    text: error instanceof Error
                        ? error.message
                        : "Unknown error occurred.",
                },
            ],
        };
    }
}
