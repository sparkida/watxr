/** generated by build-exports.mjs */
export interface WasmModule {
    HEAP8: Int8Array;
    HEAP16: Int16Array;
    HEAP32: Int32Array;
    HEAPU8: Uint8Array;
    HEAPU16: Uint16Array;
    HEAPU32: Uint32Array;
    HEAPF32: Float32Array;
    HEAPF64: Float64Array;
    default: (...args: unknown[]) => Promise<WasmModule>;
    _malloc: (size: number) => number;
    _free: (ptr: number) => void;
    _tensor_add: (tensorPtr: number, inputPtr: number, size: number) => number;
    _tensor_sub: (tensorPtr: number, inputPtr: number, size: number) => number;
    _tensor_mul: (tensorPtr: number, inputPtr: number, size: number) => number;
    _tensor_div: (tensorPtr: number, noNan: boolean, inputPtr: number, size: number) => number;
    _tensor_maximum: (tensorPtr: number, inputPtr: number, inputSize: number) => number;
    _tensor_minimum: (tensorPtr: number, inputPtr: number, inputSize: number) => number;
    _tensor_mod: (tensorPtr: number, inputPtr: number, inputSize: number) => number;
    _tensor_pow: (tensorPtr: number, inputPtr: number, inputSize: number) => number;
    _tensor_squared_diff: (tensorPtr: number, inputPtr: number, inputSize: number) => number;
    _tensor_abs: (tensorPtr: number) => number;
    _tensor_acos: (tensorPtr: number) => number;
    _tensor_acosh: (tensorPtr: number) => number;
    _tensor_asin: (tensorPtr: number) => number;
    _tensor_asinh: (tensorPtr: number) => number;
    _tensor_atan: (tensorPtr: number) => number;
    _tensor_atan2: (tensorPtr: number, inputPtr: number, inputSize: number) => number;
    _tensor_atanh: (tensorPtr: number) => number;
    _tensor_ceil: (tensorPtr: number) => number;
    _tensor_clip: (tensorPtr: number, lower: number, upper: number) => number;
    _tensor_cos: (tensorPtr: number) => number;
    _tensor_cosh: (tensorPtr: number) => number;
    _tensor_floor: (tensorPtr: number) => number;
    _tensor_square: (tensorPtr: number) => number;
    _tensor_create: (rows: number, cols: number, is1d: boolean) => number;
    _tensor_delete: (tensorPtr: number) => void;
    _tensor_batch_delete: (instancesPtr: number, size: number) => void;
    _tensor_get_shape: (tensorPtr: number, shapePtr: number) => void;
    _tensor_get_data_ptr: (tensorPtr: number) => number;
    _tensor_get_rows: (tensorPtr: number) => number;
    _tensor_get_cols: (tensorPtr: number) => number;
    _tensor_get_bounds: (tensorPtr: number, boundsPtr: number) => void;
    _tensor_clone: (tensorPtr: number) => number;
    _tensor_eye: (tensorPtr: number) => number;
    _tensor_diag: (tensorPtr: number, shapeWirePtr: number) => number;
    _kalman_create: (q: number, r: number) => number;
    _kalman_delete: (kalmanPtr: number) => void;
    _kalman_reset: (kalmanPtr: number) => void;
    _kalman_update: (kalmanPtr: number, observationPtr: number, size: number, qTemp: number, rTemp: number) => void;
    _tensor_qr: (tensorPtr: number, QPtr: number) => number;
    _tensor_transpose: (tensorPtr: number) => number;
    _tensor_norm: (tensorPtr: number, ord: number, axis: number, keepdims: boolean, shapeWirePtr: number) => number;
    _tensor_matmul: (tensorPtr: number, otherPtr: number, shapeWirePtr: number) => number;
    _tensor_dot: (tensorPtr: number, otherPtr: number, shapeWirePtr: number) => number;
    _tensor_all: (tensorPtr: number, axis: number, keepdims: boolean, shapeWirePtr: number) => number;
    _tensor_any: (tensorPtr: number, axis: number, keepdims: boolean, shapeWirePtr: number) => number;
    _tensor_arg_max: (tensorPtr: number, axis: number, shapeWirePtr: number) => number;
    _tensor_arg_min: (tensorPtr: number, axis: number, shapeWirePtr: number) => number;
    _tensor_max: (tensorPtr: number, axis: number, keepdims: boolean, shapeWirePtr: number) => number;
    _tensor_mean: (tensorPtr: number, axis: number, keepdims: boolean, shapeWirePtr: number) => number;
    _tensor_min: (tensorPtr: number, axis: number, keepdims: boolean, shapeWirePtr: number) => number;
    _tensor_prod: (tensorPtr: number, axis: number, keepdims: boolean, shapeWirePtr: number) => number;
    _tensor_sum: (tensorPtr: number, axis: number, keepdims: boolean, shapeWirePtr: number) => number;
    _tensor_reverse: (tensorPtr: number, axis: number) => number;
    _tensor_stack: (instancesPtr: number, size: number) => number;
    _tensor_pad: (tensorPtr: number, shapeWirePtr: number, constant: number, rpadBefore: number, rpadAfter: number, cpadBefore: number, cpadAfter: number) => number;
    _tensor_flatten: (tensorPtr: number) => number;
    _tensor_reshape: (tensorPtr: number, newRows: number, newCols: number, shapeWirePtr: number) => number;
}
