export declare class ToolError {
    static from(error: unknown): {
        isError: boolean;
        content: {
            type: "text";
            text: string;
        }[];
    };
}
