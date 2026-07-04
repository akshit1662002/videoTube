// class ApiError extends Error {
//   constructor(
//     statusCode,
//     message = "Something went wrong",
//     errors = [],
//     stack = ""
//   ) {
//     super(message);
//     this.statusCode = statusCode;
//     this.data = null;
//     this.message = message;
//     this.success = false;
//     this.errors = errors;

//     if (stack) {
//       this.stack = stack;
//     } else {
//       Error.captureStackTrace(this, this.constructor);
//     }
//   }
// }

// export { ApiError };

// also this is class based approach now i write functional based approach

export function ApiError(
  statusCode,
  message = "Something went wrong",
  errors = [],
  stack = ""
) {
  const error = new Error(message);

  return {
    statusCode,
    data: null,
    message,
    success: false,
    errors,
    stack: stack || error.stack,
  };
}
