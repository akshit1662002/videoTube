// class ApiResponse {
//   constructor(statusCode, data, message = "Success") {
//     this.statusCode = statusCode;
//     this.data = data;
//     this.message = message;
//     this.success = statusCode < 400;
//   }
// }

// export { ApiResponse };

// this above code is in class based , below i write down in functional based

export function ApiResponse(statusCode, data, message = "Success") {
  return {
    statusCode: statusCode,
    data: data,
    message: message,
    success: statusCode < 400,
  };
}

/*
now i understand , so this is the genric respone that i made ,
 so when i made api , all api structure is same like above
 */
