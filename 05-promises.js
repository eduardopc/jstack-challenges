const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Sucesso");
    reject("Erro");
  }, 2000);
});

// working with promises
apiCall
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// working with async/await
async function run() {
  try {
    const res = await apiCall;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

run();
