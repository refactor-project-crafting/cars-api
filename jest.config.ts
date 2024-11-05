import { createDefaultPreset, JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  verbose: true,
  rootDir: "src",
  resolver: "ts-jest-resolver",
  ...createDefaultPreset(),
};

export default config;
