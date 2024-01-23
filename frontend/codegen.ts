import type { CodegenConfig } from "@graphql-codegen/cli";
import {} from "./src/graphql";

const config: CodegenConfig = {
  schema: "http://localhost:5000/",
  documents: ["./src/graphql/*.ts"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
