<h1 align="center">Virtual Makerspace</h1>

<p align="center">
    <img src="https://user-images.githubusercontent.com/90591931/262723964-96c0b3ac-ffa2-46cb-967f-b19286ca6dfe.png" alt="Logo" width="150" height="150">
</p>

## Development
### Step 1 : Use Specific NodeJS Version
This can switch NodeJS version to v20.10.0(You should first have NodeJS v20.10.0 installed)

```sh
nvm use
```

### Step 2 : Install the dependencies

This will install all dependencies for the app

```sh
# VMKS-Website
pnpm install:all
```

## Run Backend

### Step 1 : Start database

This will have postgres and adminer running for the backend

```sh
# VMKS-Website
docker-compose up -d
```

### Step 2 : Install dotenv

```sh
# VMKS-Website/backend
pnpm install -g dotenv-cli
```

### Step 3 : Run Prisma

```sh
# VMKS-Website/backend
pnpm generate
pnpm migrate
```

### Step 4 : Start Apollo Server(backend)

```sh
# VMKS-Website
pnpm backend
```

This will run apollo graphql playground at port 5000

you can then use adminer at port 8080, or run

```sh
# VMKS-Website/backend
pnpm studio
```

to open up prisma studio to check whether the data is properly saved

### Step 5 : Initialize Database (user and schedule)

```sh
# VMKS-Website/backend
pnpm initData
```

This will add default data to the database

### Problems may occur

kill the port being stucked : `sudo kill -9 $(sudo lsof -t -i:port)`. If you want to kill port 8080, type : `sudo kill -9 $(sudo lsof -t -i:8080)`

## Run Frontend(Backend should run first)

### Step 1 : Update GraphQL Code Generator

```sh
# VMKS-Website/frontend
pnpm codegen
```

### Step 2 : Start React app(frontend)

```sh
# VMKS-Website
pnpm frontend
```

This will run react app at port 3000
