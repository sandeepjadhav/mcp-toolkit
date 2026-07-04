export declare class ToolResponse {
    static text(text: string): {
        content: {
            type: "text";
            text: string;
        }[];
    };
    static json(data: unknown): {
        content: {
            type: "text";
            text: string;
        }[];
    };
    static success(message: string): {
        content: {
            type: "text";
            text: string;
        }[];
    };
    static created(id: string): {
        content: {
            type: "text";
            text: string;
        }[];
    };
    static deleted(count: number): {
        content: {
            type: "text";
            text: string;
        }[];
    };
    static updated(count: number): {
        content: {
            type: "text";
            text: string;
        }[];
    };
}
