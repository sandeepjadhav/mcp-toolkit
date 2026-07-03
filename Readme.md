                         McpApplication
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
        ▼                      ▼                      ▼
   McpServer             ServiceContainer        ToolRegistry
                               │
                               ▼
                         MongoService
                         Logger
                         Config
                         ...


src/
│
├── lib/
│   ├── application/
│   │      McpApplication.ts
│   │
│   ├── container/
│   │      ServiceContainer.ts
│   │
│   ├── tool/
│   │      BaseTool.ts
│   │      ToolRegistry.ts
│   │      ToolResponse.ts
│   │      ToolError.ts
│   │
│   ├── logger/
│   │      Logger.ts
│   │
│   ├── types.ts
│   └── index.ts
│
├── services/
├── config/
├── tools/
└── server.ts                        