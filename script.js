let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject("done"), 5000);
});

// 1 - then
promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Promise was finished!"));

async function showMessage() {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Promise was finished!");
  }
}
showMessage();
