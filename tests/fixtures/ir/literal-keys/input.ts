import { __dumpAllIR, register } from "../../../../dist/typecheck.macro";

export default () => {
  interface LiteralKeys {
    hello: number;
    3: string;
  }
  register("LiteralKeys");
  return __dumpAllIR;
};
