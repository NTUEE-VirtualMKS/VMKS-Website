import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  HttpLink,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { UserProvider } from "./contexts/UserContext";
import { WindowProvider } from "./contexts/WindowContext";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

// HTTP connection to the API
const httpLink = new HttpLink({
  uri: "http://localhost:5000/",
});

// WebSocket link for subscriptions
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:5000/",
  })
);

// Split based on operation type
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

// Apollo client setup
const client = new ApolloClient({
  link: splitLink,
  uri: "http://localhost:5000/",
  cache: new InMemoryCache(),
});

// Rendering the root component
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <TooltipProvider>
          <WindowProvider>
            <UserProvider>
              <Toaster />
              <App />
            </UserProvider>
          </WindowProvider>
        </TooltipProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
