#pragma once

#include <memory>
#include <limits>
#include <vector>
#include <algorithm>
#include <cmath>
#include "./ErrorHelper.h"

#ifdef USE_DOUBLE
using Real = double;
#else
using Real = float;
#endif


// Don't allow std::cout in production builds
#ifdef TENSOR_DEBUG
#include <iostream>
#endif


enum NORM_ORD {
  L2,
  L1,
  MAX
};

struct Bounds {
  Real xmin;
  Real ymin;
  Real xmax;
  Real ymax;
};

struct Shape {
  size_t rows;
  size_t cols;
  bool is1d;
};

class Tensor {
  public:
    size_t rows;
    size_t cols;
    bool is1d;

    std::shared_ptr<std::vector<Real>> data;

    Tensor(size_t rows, size_t cols, bool is1d);
    Tensor(size_t rows, size_t cols, bool is1d, std::shared_ptr<std::vector<Real>> shared_data_ptr);
    //Tensor(size_t rows, size_t cols, bool is1d, std::shared_ptr<std::vector<Real>>& data_copy);
    Tensor(size_t rows, size_t cols, bool is1d, std::vector<Real> data_copy);
    //Tensor(size_t rows, size_t cols, bool is1d, const std::vector<Real>& data_copy);
    Tensor(const Tensor& other);
    ~Tensor();

    // TODO tf.Variable - mutable objects

    Tensor deepcopy() const;
    const std::vector<Real>& data_ref() const;
    std::vector<Real>& data_ref();
    //void ensure_unique();
    //Real get(size_t row, size_t col) const;
    //void set(size_t row, size_t col, Real value);

    Bounds get_bounds() const;
    Shape get_shape() const;

    // Helpers
    template <typename Func>
    Tensor apply_math_op(Func func) const;
    // implemented in core.cpp
    Tensor math_op(Real (*op)(Real)) const;
    template <typename Func>
    Tensor broadcast_op(const Real* input, size_t input_size, Func func) const;


    Tensor eye() const;
    Tensor pad(Real constant, size_t rpad_before, size_t rpad_after, size_t cpad_before, size_t cpad_after) const;
    Tensor diag() const;
    Tensor transpose() const;
    Tensor flatten() const;
    Tensor reshape(const int new_rows, const int new_cols) const;
    Tensor reverse(const int axis) const;
    Tensor stack(const Real* instances, size_t input_size) const;


    // arithmetic
    Tensor add(const Real* input, size_t input_size) const;
    Tensor sub(const Real* input, size_t input_size) const;
    Tensor mul(const Real* input, size_t input_size) const;
    Tensor div(bool no_nan, const Real* input, size_t input_size) const;
    Tensor maximum(const Real* input, size_t input_size) const;
    Tensor minimum(const Real* input, size_t input_size) const;
    Tensor mod(const Real* input, size_t input_size) const;
    Tensor pow(const Real* input, size_t input_size) const;
    Tensor squared_diff(const Real* input, size_t input_size) const;

    // basicmath
    Tensor abs() const;
    Tensor acos() const;
    Tensor acosh() const;
    Tensor asin() const;
    Tensor asinh() const;
    Tensor atan() const;
    Tensor atan2(const Real* input, size_t input_size) const;
    Tensor atanh() const;
    Tensor ceil() const;
    Tensor clip(const Real lower, const Real upper) const;
    Tensor cos() const;
    Tensor cosh() const;
    Tensor floor() const;
    Tensor square() const;

    // linalg
    Tensor qr(Tensor* Q) const;

    // matrices
    Tensor norm(NORM_ORD ord, int axis, bool keepdims = false) const;
    Tensor matmul(const Tensor& other) const;
    Tensor dot(const Tensor& other) const;

    // reduction
    Tensor all(int axis, bool keepdims = false) const;
    Tensor any(int axis, bool keepdims = false) const;
    Tensor arg_max(int axis) const;
    Tensor arg_min(int axis) const;
    Tensor max(int axis, bool keepdims = false) const;
    Tensor mean(int axis, bool keepdims = false) const;
    Tensor min(int axis, bool keepdims = false) const;
    Tensor prod(int axis, bool keepdims = false) const;
    Tensor sum(int axis, bool keepdims = false) const;


  private:
    const Real INF = std::numeric_limits<Real>::infinity();
};

// Used to update the shape on JS interface and avoid
// the additional interop to sync it
void update_shape_wire(Tensor* tensor, int* shape_wire);

#include "./Tensor.tpp"
