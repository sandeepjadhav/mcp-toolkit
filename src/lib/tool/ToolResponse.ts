export class ToolResponse {
  static text(text: string) {
    return {
      content: [
        {
          type: "text" as const,
          text,
        },
      ],
    };
  }

  static json(data: unknown) {
    return this.text(JSON.stringify(data, null, 2));
  }

  static success(message: string) {
    return this.text(`✅ ${message}`);
  }

  static created(id: string) {
    return this.text(`Created successfully (${id})`);
  }

  static deleted(count: number) {
    return this.text(`Deleted ${count} document(s)`);
  }

  static updated(count: number) {
    return this.text(`Updated ${count} document(s)`);
  }
}