import * as IR from "./IR";
export { IR };
export interface BooleanOptions {
  // True by default. If false, then circular references will not work.
  circularRefs?: boolean;
  // True by default. If false, foreign keys will be disallowed.
  allowForeignKeys?: boolean;
}

interface Constraints {
  constraints:  {[keyName: string]: Function };
}

export default function createValidator<T>(
  opts?: BooleanOptions,
  constraints?: Constraints
): (value: unknown) => value is T;
export interface DetailedOptions extends BooleanOptions {
  expectedValueFormat?: "human-friendly" | "type-ir"
}
export function createDetailedValidator<T>(
  opts?: DetailedOptions,
  constraints?: Constraints
): (
  value: unknown,
  errs: Array<[string, unknown, IR.IR | string]>
) => value is T;
export function registerType(typeName: string): () => void;

declare type TypeStats = Map<string, number>;
export interface TypeInfo {
  readonly typeStats: TypeStats;
  value: IR.IR;
  circular: boolean;
}

export const __dumpAfterRegistration: Map<string, IR.IR>;
export function __dumpAfterTypeResolution(
  ...typeNames: string[]
): Map<string, IR.IR>;
export function __dumpAfterTypeFlattening(
  ...typeNames: string[]
): Map<string, IR.IR>;
export function __dumpInstantiatedIR<T>(): Map<string, TypeInfo>;
