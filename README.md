# MCP Toolkit

> Build production-ready **Model Context Protocol (MCP)** servers with TypeScript.

MCP Toolkit is a lightweight, TypeScript-first framework for building scalable MCP servers using a clean plugin architecture, dependency injection, runtime services, and built-in validation.

The official MCP SDK provides the protocol implementation. MCP Toolkit provides the application framework that helps you organize tools, plugins, services, and reusable components as your MCP server grows.

---

## ✨ Features

* 🚀 Build MCP servers in minutes
* 🔌 Plugin-based architecture
* 📦 Built-in dependency injection
* ✅ Zod-powered input validation
* 🛠 TypeScript-first design
* 🧩 Reusable services
* 📚 Declarative tools and plugins
* ⚡ Minimal boilerplate
* 🎯 Production-ready architecture
* 🔄 Extensible runtime

---

## Why MCP Toolkit?

As your MCP server grows, you'll eventually need:

* A consistent way to organize tools
* Shared services (MongoDB, Redis, GitHub, etc.)
* Dependency injection
* Validation
* Plugin management
* Reusable architecture

The official MCP SDK intentionally focuses on the protocol.

**MCP Toolkit** focuses on the developer experience.

It provides the missing application layer while remaining lightweight and fully compatible with the official MCP SDK.

---

## Installation

```bash
npm install @mcp-toolkit/core
```

or

```bash
pnpm add @mcp-toolkit/core
```

---

# Quick Start

Create your first MCP server.

```typescript
import { McpApplication } from "@mcp-toolkit/core";

async function bootstrap() {

    const app = new McpApplication({

        name: "My MCP Server",

        version: "1.0.0"

    });

    await app.start();

}

bootstrap();
```

That's it.

Your first MCP server is running.

---

# Architecture

```text
Application
      │
      ▼
 Plugins
      │
      ▼
 Services
      │
      ▼
 Runtime
      │
      ▼
 Tools
      │
      ▼
 Official MCP SDK
```

---

# Core Concepts

## Application

The application is the entry point of your MCP server.

```typescript
const app = new McpApplication({
    name: "Example",
    version: "1.0.0"
});
```

---

## Services

Register reusable services such as MongoDB, Redis, or GitHub clients.

```typescript
defineService({

    token: MongoServiceToken,

    async create() {

        return getMongoService();

    }

});
```

---

## Tools

Every MCP capability is implemented as a Tool.

```typescript
export default defineTool({

    name: "calculator_add",

    title: "Add Numbers",

    description: "Adds two numbers.",

    schema

});
```

---

## Plugins

Group related services and tools into reusable plugins.

```typescript
export default definePlugin({

    name: "calculator",

    version: "1.0.0",

    tools: [

        AddTool,

        MultiplyTool

    ]

});
```

---

# Project Structure

```text
src/
│
├── core/
│
├── plugins/
│
├── providers/
│
├── services/
│
├── tools/
│
└── server.ts
```

---

# Official Plugins

Planned plugins include:

* MongoDB
* Filesystem
* Calculator
* GitHub
* Redis
* PostgreSQL
* Kubernetes

---

# Examples

See the `examples/` directory for complete projects:

* Calculator
* MongoDB
* Custom Tool
* Custom Plugin

---

# Roadmap

## v0.1

* Core Framework
* Plugin System
* Dependency Injection
* MongoDB Plugin
* Calculator Plugin

## v0.2

* Hook System
* Middleware
* Lifecycle Events
* Better Documentation

## v1.0

* CLI
* Project Generator
* Plugin Marketplace
* Production Ready Ecosystem

---

# Contributing

Contributions are welcome.

Whether you're fixing bugs, improving documentation, or creating new plugins, we'd love your help.

Please open an issue before starting large changes so we can discuss the design.

---

# License

MIT
