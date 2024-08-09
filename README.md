<h1 align="center">Virtual Makerspace</h1>

<p align="center">
    <img src="https://user-images.githubusercontent.com/90591931/262723964-96c0b3ac-ffa2-46cb-967f-b19286ca6dfe.png" alt="Logo" width="150" height="150">
</p>

## Development
### Step 1 : Use Specific NodeJS Version
This can switch NodeJS version to v18.16.0(You should first have NodeJS v18.16.0 installed)

```sh
nvm use
```

### Step 2 : Install the dependencies
 
This will install all dependencies for the app

```sh
pnpm install:all
```

## Run Backend

### Step 1 : Start database

This will have postgres and adminer running for the backend

```sh
docker-compose up -d
```

### Step 2 : Install dotenv & ts-node

```sh
cd backend
pnpm setup
```

### Step 3 : Run Prisma

```sh
cd backend
pnpm generate
pnpm migrate
```

### Step 4 : Start Apollo Server(backend)

```sh
cd ..
pnpm backend
```

This will run apollo graphql playground at port 5000

you can then use adminer at port 8080, or run

```sh
cd backend
pnpm studio
```

to open up prisma studio to check whether the data is properly saved

### Step 5 : Initialize Database

```sh
cd backend
pnpm initData
```

This will add default data to the database

### Problems may occur

kill the port being stucked : `sudo kill -9 $(sudo lsof -t -i:port)`. If you want to kill port 8080, type : `sudo kill -9 $(sudo lsof -t -i:8080)`

## Run Frontend(Backend should run first)

### Step 1 : Update GraphQL Code Generator

```sh
cd frontend
pnpm codegen
```

### Step 2 : Start React app(frontend)

```sh
cd ..
pnpm frontend
```

This will run react app at port 3000
