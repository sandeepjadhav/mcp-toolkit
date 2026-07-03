import { z } from "zod";
import { mathTool } from './math.js';
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerCalculatorTools(server: McpServer) {
    server.registerTool("add",
        {
            title: "Addition Tool",
            description: "Adds two numbers together.",
            inputSchema: {
                a: z.number(),
                b: z.number()
            },
        },
        async ({ a, b }: { a: number; b: number }) => ({
            content: [{
                type: "text",
                text: String(mathTool.add(a, b))
            }]
        })
    );

    server.registerTool("subtract",
        {
            title: "Subtraction Tool",
            description: "Subtracts the second number from the first.",
            inputSchema: {
                a: z.number(),
                b: z.number()
            },
        },
        async ({ a, b }: { a: number; b: number }) => ({
            content: [{
                type: "text",
                text: String(mathTool.subtract(a, b))
            }]
        })
    );

    server.registerTool("multiply",
        {
            title: "Multiplication Tool",
            description: "Multiplies two numbers together.",
            inputSchema: {
                a: z.number(),
                b: z.number()
            },
        },
        async ({ a, b }: { a: number; b: number }) => ({
            content: [{
                type: "text",
                text: String(mathTool.multiply(a, b))
            }]
        })
    );

    server.registerTool("divide",
        {
            title: "Division Tool",
            description: "Divides the first number by the second.",
            inputSchema: {
                a: z.number(),
                b: z.number()
            },
        },
        async ({ a, b }: { a: number; b: number }) => ({
            content: [{
                type: "text",
                text: String(mathTool.divide(a, b))
            }]
        })
    );
    server.registerTool("power",
        {
            title: "Power Tool",
            description: "Raises the first number to the power of the second.",
            inputSchema: {
                a: z.number(),
                b: z.number()
            },
        },
        async ({ a, b }: { a: number; b: number }) => ({
            content: [{
                type: "text",
                text: String(mathTool.power(a, b))
            }]
        })
    );

    server.registerTool("sqrt",
        {
            title: "Square Root Tool",
            description: "Calculates the square root of a number.",
            inputSchema: {
                a: z.number()
            },
        },
        async ({ a }: { a: number }) => ({
            content: [{
                type: "text",
                text: String(mathTool.sqrt(a))
            }]
        })
    )
}