# React Server Side Rendering with Express

Implementing `Server Side Rendering (SSR)` using `React` and `Express`

## Getting Started

### Development Environment & Run Server

Before you start server, you need to install dependencies in local

```bash
$ npm install
```

Run the commands to launch the `dev` server:

```bash
$ docker-compose up
```

### Production Enviroment & Run server

```bash
$ docker run --rm -it -p 3000:3000 react-express-ssr:latest

# or run with docker-compose
$ docker-compose -f docker-compose.prod.yml up
```

## Reference

1. [React Server Side Rendering with Express](https://danlegion.medium.com/react-server-side-rendering-with-express-b6faf56ce22)
2. [React SSR | 從零開始實作 SSR — 基礎篇](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/server-side-rendering-ssr-in-reactjs-part1-d2a11890abfc)
3. [mattwang44/react-express-ssr-template ](https://github.com/mattwang44/react-express-ssr-template): Serve frontend static build
