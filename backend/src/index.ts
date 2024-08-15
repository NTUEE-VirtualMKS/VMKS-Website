import express, { Request, Response, NextFunction } from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";

import { typeDefs } from "./types/typeDefs.ts";
import { Query } from "./resolvers/Query.ts";
import { Mutation } from "./resolvers/Mutation.ts";
import { Subscription } from "./resolvers/Subscription.ts";
// import rateLimit from "express-rate-limit";
// import depthLimit from "graphql-depth-limit";
// import mongoSanitize from "express-mongo-sanitize";
// import { JSDOM } from "jsdom";
// import createDOMPurify from "dompurify";

const app = express();
const resolvers = { Query, Mutation, Subscription };
const schema = makeExecutableSchema({ typeDefs, resolvers });

const httpServer = http.createServer(app);

const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/",
});

const serverCleanup = useServer({ schema }, wsServer);

const server = new ApolloServer({
  schema,
  plugins: [
    // Proper shutdown for the HTTP server.
    ApolloServerPluginDrainHttpServer({ httpServer }),

    // Proper shutdown for the WebSocket server.
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
  // // Apply depth limit to prevent deeply nested queries
  // validationRules: [depthLimit(5)], // Adjust the depth limit as needed
});

await server.start();

// // Apply security middleware
// app.use(
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         defaultSrc: ["'self'"],
//         scriptSrc: [
//           "'self'",
//           "'nonce-ba718f1c6f9627487169d9daa4b59d6bacd37c56420a8ceb322328d555560046'",
//           "https://embeddable-sandbox.cdn.apollographql.com",
//           "https://embeddable-explorer.cdn.apollographql.com",
//           "https://apollo-server-landing-page.cdn.apollographql.com",
//         ],
//         imgSrc: ["'self'", "data:", "https://apollo-server-landing-page.cdn.apollographql.com"],
//         connectSrc: ["'self'", "https://embeddable-sandbox.cdn.apollographql.com"],
//         styleSrc: [
//           "'self'",
//           "'unsafe-inline'",
//           "https://fonts.googleapis.com",
//         ],
//         frameSrc: [
//           "'self'",
//           "https://embeddable-sandbox.cdn.apollographql.com",
//           "https://sandbox.embed.apollographql.com",
//         ],
//       },
//     },
//   })
// );

// // Apply rate limiting middleware
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
//   message: "Too many requests from this IP, please try again later.",
// });

// app.use(limiter);

// // Sanitize user input to prevent NoSQL injection attacks
// app.use(mongoSanitize());

// // Sanitize user input to prevent XSS attacks
// const window = new JSDOM("").window;
// const DOMPurify = createDOMPurify(window);

// app.use((req: Request, _res: Response, next: NextFunction) => {
//   if (req.body) {
//     for (const key in req.body) {
//       if (req.body.hasOwnProperty(key)) {
//         req.body[key] = DOMPurify.sanitize(req.body[key]);
//       }
//     }
//   }
//   next();
// });

app.use(
  "/",
  cors<cors.CorsRequest>(),
  bodyParser.json(),
  expressMiddleware(server),
);

const PORT = 5000;
// Now that our HTTP server is fully set up, we can listen to it.
httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/`);
});
