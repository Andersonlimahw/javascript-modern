const apiRequestSample = new Promise((resolve, reject) => {

  // Fake timeout
  setTimeout(() => {
    resolve({
      data: {
        id: 1,
      },
      message: 'Success!',
      code: 200,
    });
  }, 1000);

});

const apiRequestSampleError = new Promise((resolve, reject) => {

  // Fake timeout
  setTimeout(() => {
    reject({
      data: undefined,
      message: 'Error!',
      code: 400
    });
  }, 1000);

});

const asyncFunction = new Promise((resolve, reject) => {

  // Fake timeout
  setTimeout(() => {
    resolve({
      data: {
        id: 1,
      },
      message: 'Success!',
      code: 200,
    });
  }, 1000);

});

// Pennding
console.log(apiRequestSample);

// Success
console.log(apiRequestSample
    .then(data => console.log(data))
    .catch(error => console.error(error))
);

// Error
console.log(apiRequestSampleError
  .then(data => console.log(data))
  .catch(error => console.error(error))
);

// Async /  await
async function asyncFunction() {
  const response = await apiRequestSample();
  console.log(response);
}

asyncFunction();

// Async /  await + try , catch
async function asyncFunctionTryCatch() {
  try {
    const response = await apiRequestSampleError();
    console.log(response);
    console.log('After promisse');
  } catch(error) {
    console.error(error);
  }
}

asyncFunctionTryCatch();
