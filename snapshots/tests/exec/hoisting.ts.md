# Snapshot report for `tests/exec/hoisting.ts`

The actual snapshot is saved in `hoisting.ts.snap`.

Generated by [AVA](https://avajs.dev).

## basic

> Snapshot 1

    `(x) => {␊
      const f0 = (x0) => typeof x0 === "object" && x0 !== null;␊
    ␊
      return ((p0) =>␊
        !!p0 &&␊
        Object.prototype.hasOwnProperty.call(p0, "val1") &&␊
        f0(p0.val1) &&␊
        Object.prototype.hasOwnProperty.call(p0, "val2") &&␊
        f0(p0.val2))(x);␊
    };␊
    `

> Snapshot 2

    `(x) => {␊
      const f0 = (x0) => typeof x0 === "object" && x0 !== null;␊
    ␊
      return ((p0) =>␊
        !!p0 &&␊
        Object.prototype.hasOwnProperty.call(p0, "val1") &&␊
        f0(p0.val1) &&␊
        Object.prototype.hasOwnProperty.call(p0, "val2") &&␊
        f0(p0.val2))(x);␊
    };␊
    `