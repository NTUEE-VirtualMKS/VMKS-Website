<h1 align="center">Virtual Makerspace</h1>

<div align="center">
    <img src="https://user-images.githubusercontent.com/90591931/262723964-96c0b3ac-ffa2-46cb-967f-b19286ca6dfe.png" alt="Virtual Makerspace Logo" width="150" height="150">
</div>

## 🚀 Project Overview

Virtual Makerspace is a collaborative platform designed to facilitate remote making and creativity. This README provides step-by-step instructions to set up and run the project locally.

## 📋 Prerequisites

- Node.js v20.10.0
- pnpm
- Docker (for database)

## 🛠 Development Setup

### 1. Node.js Version Management

Ensure you're using the correct Node.js version:

```sh
nvm use
```

### 2. Install Dependencies

Install all project dependencies:

```sh
# From project root
pnpm install:all
```

## 🗃 Backend Setup

### 1. Start Database Services

Launch PostgreSQL and Adminer using Docker:

```sh
# From project root
docker-compose up -d
```

### 2. Initialize Prisma

Generate and apply database migrations:

```sh
# From backend directory
pnpm generate
pnpm migrate
```

### 3. Start Apollo Server

Run the backend server:

```sh
# From project root
pnpm backend  # Runs Apollo Sandbox at port 5000
```

Alternatively, open Prisma Studio:

```sh
# From backend directory
pnpm studio
```

### 4. Initialize Database Data

Populate the database with default user and schedule data:

```sh
# From backend directory
pnpm initData
```

## 🖥 Frontend Setup

### 1. Update GraphQL Code Generator

```sh
# From frontend directory
pnpm codegen
```

### 2. Start React Application

```sh
# From project root
pnpm frontend  # Runs React app at port 5173
```

## 🛠 Troubleshooting

### Killing Stuck Ports

To release a port (replace `8080` with your specific port):

```sh
sudo kill -9 $(sudo lsof -t -i:8080)
```

## 📚 Additional Resources

- [Apollo Sandbox Documentation](https://www.apollographql.com/docs/graphos/explorer/sandbox/)
- [Prisma ORM Documentation](https://www.prisma.io/docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributors

[![contributors](https://contrib.rocks/image?repo=NTUEE-VirtualMKS/VMKS-Website)](https://github.com/NTUEE-VirtualMKS/VMKS-Website/graphs/contributors)
