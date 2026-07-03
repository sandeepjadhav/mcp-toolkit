export class ToolError {
  static from(error: unknown) {
    return {
      isError: true,
      content: [
        {
          type: "text" as const,
          text:
            error instanceof Error
              ? error.message
              : "Unknown error occurred.",
        },
      ],
    };
  }
}